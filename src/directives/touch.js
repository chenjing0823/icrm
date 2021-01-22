/*
 * @Author: jing.chen
 * @Date: 2021-01-22 22:39:26
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-01-22 23:11:02
 * @Description:
 */
export default {
  inserted: function (el, binding) {
    const { value } = binding
    if (!value) {
      return
    }
    el.classList.add('touch-shadow')
  },
  unbind (el) {
    // document.body.removeChild(el)
  }
}
