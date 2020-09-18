/*
 * @Author: jing.chen
 * @Date: 2020-08-31 10:34:54
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:27:51
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

import getters from './getters'
Vue.use(Vuex)
const state = {
  currActiveSubMenu: '',
  currActiveMenu: sessionStorage.getItem('currPage') ? sessionStorage.getItem('currPage') : 'index', // 保存:当前选中项菜单栏alias = name
  isRouterRequestStatus: false, // 记录：路由是否请求过
  menuRoutes: [] // 路由
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
  }
})
