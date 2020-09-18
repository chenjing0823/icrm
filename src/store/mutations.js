/*
 * @Author: jing.chen
 * @Date: 2020-09-18 15:21:04
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-18 15:54:13
 * @Description:
 */
export default {
  setRouterRequestStatus (state, payload) {
    state.isRouterRequestStatus = payload
  },
  saveCurrActiveMenu (state, payload) {
    sessionStorage.setItem('currPage', payload)
    state.currActiveMenu = payload
  },
  saveMenuRoutes (state, payload) {
    state.menuRoutes.push(...payload)
  },
  saveCurrActiveSubMenu (state, payload) {
    state.currActiveSubMenu = payload
  }
}
