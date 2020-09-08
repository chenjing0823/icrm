/*
 * @Author: jing.chen
 * @Date: 2020-09-08 15:37:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:38:40
 * @Description:
 */

import request from '@/utils/request.js'

export function login (data) {
  return request({
    url: 'user/login',
    data
  })
}

export function listForm (data) {
  return request({
    url: 'list/form',
    data
  })
}
