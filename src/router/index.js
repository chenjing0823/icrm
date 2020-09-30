/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:35:34
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "frame" */ '@/components/layout/frame.vue'),
    children: [{
      path: '/index',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: () => import(/* webpackChunkName: "list" */ '@/views/home/home.vue')
    }]
  },
  {
    path: '/manageCenter',
    name: '管理中心',
    component: () => import(/* webpackChunkName: "manage" */ '@/views/manage/index.vue')
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
