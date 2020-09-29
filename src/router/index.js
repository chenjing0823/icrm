/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 19:26:31
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '图表中心',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "frame" */ '@/components/layout/frame.vue'),
    children: [{
      path: '/index',
      name: '图表中心',
      meta: {
        title: '图表中心'
      },
      component: () => import(/* webpackChunkName: "list" */ '@/views/home/home.vue')
    }]
  },
  // {
  //   path: '/login',
  //   name: '登录页',
  //   component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  // },
  {
    path: '/list',
    name: '列表',
    component: () => import(/* webpackChunkName: "list" */ '@/views/list/list.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
