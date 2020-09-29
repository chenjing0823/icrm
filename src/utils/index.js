/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:49:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 17:12:16
 * @Description:
 */

import { Message } from 'element-ui'

const _Message = function (params = {}) {
  const _duration = params.duration || 2000
  params.duration = _duration
  params.showClose = params.showClose === undefined ? true : params.showClose
  params.type = params.type || 'success'
  params.message = params.message || '保存成功'
  Message(params)
}

/**
 * @description 消息框
 */
function messageBox (params) {
  _Message(params)
}

/**
 * @description localStorage的获取，增加，删除
 * @class Storage
 */
class Storage {
  constructor (props) {
    this.props = props || {}
    this.source = this.props.source || window.localStorage
    this.initRun()
  }

  initRun () {
    const reg = new RegExp('__expires__')
    const data = this.source
    const list = Object.keys(data)
    if (list.length > 0) {
      list.map((key, v) => {
        if (!reg.test(key)) {
          const now = Date.now()
          const expires = data[`${key}__expires__`] || Date.now + 1
          if (now >= expires) {
            this.remove(key)
          }
        }
        return key
      })
    }
  }

  /**
   * @description 获取方法
   * @param {String} key 键
   * @returns value
   * @memberof Storage
   */
  get (key) {
    const source = this.source
    const expired = source[`${key}__expires__`] || Date.now + 1
    const now = Date.now()

    if (now >= expired) {
      this.remove(key)
      return
    }
    let value = source[key]
    if (/^\{.*\}$/.test(value) || /^\[.*\]$/.test(value)) value = JSON.parse(value)
    return value
  }

  /**
   * @description 存储方法
   * @param {String} key 键
   * @param {String} value 值
   * @param {Number} expired 过期时间，单位分钟，非必填
   * @returns value
   * @memberof Storage
   */
  set (key, value, expired) {
    if (typeof value === typeof {}) value = JSON.stringify(value)
    const source = this.source
    source[key] = value
    if (expired) {
      source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired
    }
    return value
  }

  /**
   * @description 删除方法
   * @param {String} key 键
   * @returns value
   * @memberof Storage
   */
  remove (key) {
    const data = this.source
    const value = data[key]
    delete data[key]
    delete data[`${key}__expires__`]
    return value
  }
}
export default {
  messageBox,
  LS: new Storage()
}
