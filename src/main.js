/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:48:23
 * @Description: 入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/router-hooks'
import store from './store'
import './global.js' // 全局变量

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
