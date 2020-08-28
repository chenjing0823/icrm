/*
 * @Author: jing.chen
 * @Date: 2020-08-28 15:29:37
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-08-28 16:18:25
 * @Description: 入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/router-hooks'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
