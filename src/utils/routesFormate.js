/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:40:35
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:43:19
 * @Description:
 */
import menuRouter from '@/constants/menu-router.js' // 导入menu-router路由枚举
function createRouter (routes) {
  const newRoutes = []
  for (let i = 0; i < routes.length; i++) {
    const obj = getRouterInfo(routes[i])
    // 如果该遍历项没有subMenuList属性，则无子路由
    if (!routes[i].subMenuList) {
      // 后端返回值是驼峰，需要去驼峰处理
      const path = obj.path.replace(/([A-Z])/g, '-$1').toLowerCase()
      const componentFn = import(/* webpackChunkName: "doc-[request]" */ '@/views' + path + '/index.vue')
      obj.component = () => componentFn
    } else {
      // 如果有子路由
      // 添加重定向，默认取children[0]
      obj.redirect = menuRouter[routes[i].subMenuList[0].alias].path
      obj.children = createRouter(routes[i].subMenuList)
      const componentFn = import(/* webpackChunkName: "frame" */ '@/components/layout/frame.vue')
      obj.component = () => componentFn
    }
    // 添加到路由数组
    newRoutes.push(obj)
  }
  return newRoutes
}

function getRouterInfo (route) {
  return {
    path: menuRouter[route.alias].path,
    name: route.alias,
    meta: {
      title: route.name,
      icon: route.icon,
      businessType: route.businessType
    }
  }
}
export {
  createRouter
}
