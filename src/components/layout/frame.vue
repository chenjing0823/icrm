<!--
 * @Author: jing.chen
 * @Date: 2020-09-18 14:03:22
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:20:16
 * @Description:
-->
<template>
  <el-container class="frame-container">
    <el-header class="container-header">
      <div class="container-header__left">{{ companyName }}</div>
      <div class="container-header__right">
        <userBlock></userBlock>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside
        class="container-inner__sidebar"
        :class="{ 'container-inner__sidebar--extend': isSideBarExtend }">
        <!-- 菜单栏组件e-menu -->
        <frame-sidebar :menu="menuList" :extends="isSideBarExtend" />
        <!-- 折叠按钮 -->
        <div class="container-inner__sidebar--control">
          <i
            :class="isSideBarExtend ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="isSideBarExtend = !isSideBarExtend">
          </i>
        </div>
      </el-aside>
      <!-- 右侧主体内容 -->
      <el-main>
        <router-view class="main"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import FrameSidebar from '@/components/layout/frame-sidebar.vue' // 侧边栏
import userBlock from './components/user-block.vue'
import { mapState } from 'vuex'
export default {
  name: 'frame',

  components: {
    FrameSidebar,
    userBlock
  },

  data () {
    return {
      isSideBarExtend: true // 侧边栏展开
    }
  },

  computed: {
    ...mapState({
      menuList: state => state.menuRoutes
    }),
    companyName () {
      return window.utils.LS.get('accessToken').company || '还未填写公司'
    }
  }
}
</script>

<style lang="scss" scoped>
.frame-container {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  color: rgba(68, 68, 68, 100);
  .main {
    height: 100%;
  }
  .container-header {
    position: relative;
    height: 60px;
    line-height: 60px;
    background-color: $text-white;
    display: flex;
    justify-content: space-between;
  }
  .container-inner {
    margin-top: 10px;
    &__sidebar {
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      z-index: 100;
      height: 100%;
      width: 64px !important;
      padding-bottom: 64px;
      box-shadow: 0px 0px 10px 0px rgba($base-black, 0.1);
      background-color: rgba($text-white, 1);
      transition: width 0.3s;
      &--extend {
        width: 158px !important;
      }
      &--control {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 64px;
        background-color: $bg-blue;
        i {
          position: absolute;
          right: 0;
          display: block;
          width: 64px;
          height: 64px;
          line-height: 64px;
          text-align: center;
          font-size: 32px;
          &:hover {
            color: $text-white;
            background: $base-orange;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.frame-container {
  background-color: $base-lineGray;
  .el-main {
    position: relative;
    padding: 0;
    margin-left: 10px;
    margin-top: 1px;
    min-width: 1030px;
    background-color: $base-lineGray;
  }
}
</style>
