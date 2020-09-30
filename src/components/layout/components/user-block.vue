<!--
 * @Author: jing.chen
 * @Date: 2020-09-30 10:46:28
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 13:53:45
 * @Description: 用户显示组件
-->
<template>
  <div class="">
    <el-popover trigger="click" @show="view(false)" @hide="view(true)">
      <span slot="reference" class="el-dropdown-link user-block">
        <div class="avatar"><img class="avatar_img" :src="imgUrl" alt=""></div>
        <div class="name">
          <span>{{ userName }}</span>
          <i class="el-icon--right" :class="icon ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"></i>
        </div>
      </span>
      <div class="list-border">
          <template>
            <el-button type="text" @click="logout">退出登录</el-button>
          </template>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'user-block',

  data () {
    return {
      icon: true
    }
  },

  computed: {
    /**
     * @description 用户名渲染
     * @returns {String} 用户名
     */
    userName () {
      const accessToken = window.utils.LS.get('accessToken')
      return accessToken.us
    },
    /**
     * @description 默认头像
     * @returns {Function} 路径
     */
    imgUrl () {
      return require('@/assets/deault.jpeg')
    }
  },

  methods: {
    /**
     * @description 登出操作
     */
    logout () {
      window.utils.LS.remove('accessToken')
      window.location = '/login.html'
    },
    /**
     * @description 登出操作按钮icon
     * @param {Boolean} [state] 状态
     */
    view (state) {
      this.icon = state
    }
  }
}
</script>

<style lang="scss" scoped>
.user-block {
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-Regular;
  cursor: pointer;
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    .avatar_img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
