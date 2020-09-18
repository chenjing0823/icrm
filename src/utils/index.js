/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:49:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:49:49
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

export default { messageBox }
