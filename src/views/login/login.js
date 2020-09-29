/*
 * @Author: jing.chen
 * @Date: 2020-09-29 17:25:41
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 19:32:22
 * @Description:
 */
import app from './index.vue'
import Vue from 'vue'
import '../../global.js' // 全局变量
import 'element-ui/lib/theme-chalk/index.css'

import Element from 'element-ui'

Vue.use(Element)
// 挂载全局常量

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app)
})
