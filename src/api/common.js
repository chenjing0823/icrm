/*
 * @Author: jing.chen
 * @Date: 2020-09-08 15:37:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 16:48:27
 * @Description:
 */

import request from '@/utils/request.js'

// 登录
export function login (data) {
  return request({
    url: 'user/login',
    data
  })
}
// 注册
export function newUser (data) {
  return request({
    url: 'user/reg',
    data
  })
}

export function getMenuList (data) {
  return request({
    url: 'get/menuList',
    data
  })
}

export function listForm (data) {
  return request({
    url: 'list/form',
    data
  })
}
