/*
 * @Author: jing.chen
 * @Date: 2020-08-28 16:05:35
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-10-12 09:14:30
 * @Description:
 */

import router from './index'
import store from '@/store'
import { createRouter } from '@/utils/routesFormate.js'
import { getMenuList } from '@/api/common'

// 路由跳转前的钩子
router.beforeEach((to, from, next) => {
  /*
  * 2.如果用户信息localStorage 并且在登录页面 ，在直接跳转到应用页面
  */
  const accessToken = window.utils.LS.get('accessToken') // 验证token

  if (accessToken && accessToken !== 'undefined') {
    store.commit('saveCurrActiveMenu', to.name) // 获取当前路由name => alias并更新当前选中菜单
    if (to.matched.length > 1) { // 当前选中菜单在subMenu下（拥有两个层级）
      store.commit('saveCurrActiveSubMenu', to.matched[0].name)
    }
    // 条件判断：路由是否请求过，false:则进入请求
    if (!store.state.isRouterRequestStatus) {
    // 请求路由
      getMenuList({ type: 1 }).then((res) => {
      // TODO:MOCK
        console.log('获取的菜单列表', res)
        const menuList = res.menuList

        // 序列化路由
        // TODO:此处后端返回一个层级的首页路由index，但是渲染需要层级为2，需要后续处理
        // 初步处理：过滤index页面
        const menuListFilter = menuList.filter(item => {
          return item.alias !== 'index'
        })
        const routesFormate = createRouter(menuListFilter)
        // 挂载路由addRoutes
        router.options.routes = router.options.routes.concat(routesFormate)
        router.addRoutes(routesFormate)
        // 保存路由菜单
        store.commit('saveMenuRoutes', menuList)
        // 记录：路由是否请求过
        store.commit('setRouterRequestStatus', true)
        // 跳转到当前路由
        next(to)
      })
    } else {
      next()
    }
  } else {
    window.location = '/login.html'
  }
})
