/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:48:06
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:48:53
 * @Description:
 */

import Vue from 'vue'
// import '@/directives/directives'
import utils from './utils/index'
// import lodash from 'lodash'

// 挂载全局的util
Vue.prototype.$utils = utils
// 挂载全局的lodash
// Vue.prototype._ = lodash

// 挂载全局的util
window.utils === undefined && (window.utils = utils)
