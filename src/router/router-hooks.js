/*
 * @Author: jing.chen
 * @Date: 2020-08-28 16:05:35
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-08-28 16:11:42
 * @Description:
 */

import router from './index'

// 路由跳转前的钩子
router.beforeEach((to, from, next) => {
  // TODO 后续钩子处理
  next()
})
