/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:48:06
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-01-22 23:10:27
 * @Description:
 */

import '@/styles/base-element.scss'
import Vue from 'vue'
import '@/directives/directives'
import '@/styles/public.scss'
import utils from './utils/index'
// import lodash from 'lodash'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 挂载全局的util
Vue.prototype.$utils = utils
// 挂载全局的lodash
// Vue.prototype._ = lodash

// 挂载全局的util
window.utils === undefined && (window.utils = utils)
