const path = require('path')
const config = require('./config')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 是否为生产环境
const isBuildEnv = function () {
  return process.env.NODE_ENV === 'production'
}
module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // indexPath: 'index.html',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'icrm'
    },
    login: {
      entry: 'src/views/login/login.js',
      template: 'public/index.html',
      filename: 'login.html',
      title: '登录'
    }
  },
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
  parallel: require('os').cpus().length > 1,
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
  // webpack配置
  // 对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
  },
  // 调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  configureWebpack: (config) => {
    if (isBuildEnv()) {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        } // 别名配置
      }
    })
    // 利用splitChunks将每个依赖包单独打包，在生产环境下配置
    // 开启gzip压缩
    if (isBuildEnv()) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.json$|\.css/,
        threshold: 10240,
        minRatio: 0.8
      }))
      // 开启分离js
      config.optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000, // 依赖包超过20000bit将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `${packageName.replace('@', '')}`
              }
            }
          }
        },
        minimizer: [new UglifyPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })]
      }
      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积
        maxAssetSize: 30000000,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
    }
  },
  css: {
    // // 启用 CSS modules
    // requireModuleExtension: false,
    // // 是否使用css分离插件
    // extract: true,
    // // 开启 CSS source maps，一般不建议开启
    // sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/setting-variable.scss";'
        // prependData: '@import "@/styles/setting-variable.scss";' 8.x一下用data，8.x用prependData
      }
    }
  },
  pwa: {}, // PWA 插件相关配置
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    // host: 'localhost',
    host: '0.0.0.0',
    port: config.dev.port, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: config.dev.proxyTable
  },
  // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
  pluginOptions: {}
}
