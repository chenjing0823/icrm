/*
 * @Author: jing.chen
 * @Date: 2020-09-08 15:32:10
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:49:07
 * @Description: 请求封装
 */

import axios from 'axios'

// 过滤特殊字符
function CharacterFilter (str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    const us = str.charCodeAt(i)
    if (!(us < 0x20 || us === 0x7F || us === 0x2028 || us === 0x2029)) {
      newStr += str.charAt(i)
    }
  }
  return newStr
}

// 格式化请求参数
function formatParams (data) {
  let bodyString = JSON.stringify(Object.assign(data))
  // 过滤特殊字符
  if (bodyString.length > 100) {
    bodyString = CharacterFilter(bodyString)
  }
  return bodyString
}

function mergeConfig (options) {
  return Object.assign({
    baseURL: '',
    method: 'post', // 默认是 post
    timeout: 100000, // 请求超时时间
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }, options)
}

// 创建axios实例
const http = axios.create()

// 添加请求拦截
http.interceptors.request.use(
  config => {
    // 携带必要的数据
    const defaultParams = {
      userid: '1'
    }
    config.data = Object.assign({}, defaultParams, config.data)

    // 文件上传时
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      const formData = new FormData()
      for (const item in config.data) {
        formData.append(item, config.data[item])
      }
      config.data = formData
    } else {
      // 普通请求
      config.data = formatParams(config.data)
    }

    return config
  },
  err => {
    // 请求错误处理
    console.log(err)
    return Promise.reject(err)
  }
)

// 控制api版本前缀
const API_PREFIX = '/'
// const API_PREFIX = '/pro/v1'

/**
 *
 * @param { object } config
 * @param { boolean } mock 是否走mock
 */
export default function (config, mock = false) {
  let newConfig = config
  config.url = API_PREFIX + config.url
  // 只对开发环境进行处理
  if (process.env.NODE_ENV === 'development') {
    // 开启mock
    if (mock) {
      newConfig = {
        ...config,
        url: '/mock' + config.url
      }
    } else {
      newConfig = {
        ...config,
        url: '/dev' + config.url
      }
    }
  }

  return http(mergeConfig(newConfig))
}
