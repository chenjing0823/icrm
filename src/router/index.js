/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-22 16:48:02
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
