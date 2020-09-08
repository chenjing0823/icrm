/*
 * @Author: jing.chen
 * @Date: 2020-09-08 14:41:53
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 14:44:10
 * @Description:
 */
'use strict'
const path = require('path')
const chalk = require('chalk')
const TARGET = process.argv[3] ? process.argv[3].replace(/^(\S)*=/, '') : ''

const gWord = chalk.green
// 获取端口有没有改变，没重新设置的使用默认
let port = 8080
process.argv.some((item) => {
  item.includes('--env.port=') && (port = +item.replace('--env.port=', ''))
})
const proxyTable = (function handlerProxyTable (target) {
  const handTarget = target ? `http://${target}` : 'http://localhost'
  console.log(gWord('你代理请求地址为: ' + handTarget))
  return {
    '/dev': {
      target: handTarget,
      changeOrigin: true,
      pathRewrite: {
        '^/dev': ''
      }
    },
    '/mock': {
      target: 'http://yapi.xxx.com',
      changeOrigin: true,
      pathRewrite: {
        '^/mock': '/mock/138'
      }
    }
  }
}(TARGET))

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyTable,
    port: port
  },
  build: {
    assetsPublicPath: './',
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    env: {
      oms: {
        protocol: 'http',
        domain: 'omsdevgate.zjk.taeapp.com',
        server: 'aliyun'
      }
    }
  }
}
