/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:12:29
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "frame" */ '@/components/layout/frame.vue'),
    children: [{
      path: '/index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import(/* webpackChunkName: "list" */ '@/views/list/list.vue')
    }]
  },
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
