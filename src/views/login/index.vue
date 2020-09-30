<!--
 * @Author: jing.chen
 * @Date: 2020-09-29 16:41:11
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:09:27
 * @Description: 登录页
-->
<template>
  <div class="index">
    <div class="login-box">
      <div class="login-title">
        <i class="el-icon-cloudy-and-sunny"></i>
        <span>请登录</span>
      </div>
      <template v-if="isLogin">
        用户名：<el-input v-model="userName" clearable></el-input>
        密码：<el-input v-model="password" show-password clearable></el-input>
        <div class="bottom">
          <el-button type="primary" @click="submit()">登录</el-button>
          <el-button type="primary" @click="isLogin = false">注册</el-button>
        </div>
      </template>
      <template v-else>
        用户名：<el-input v-model="userName" clearable></el-input>
        密码：<el-input v-model="password" show-password clearable></el-input>
        公司：<el-input v-model="company" clearable></el-input>
        电话：<el-input v-model="phone" clearable></el-input>
        性别：<el-input v-model="sex" clearable></el-input>
        <div class="bottom">
          <el-button type="primary" @click="comfirm()">注册</el-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { login, newUser } from '@/api/common'
export default {
  name: 'index',

  data () {
    return {
      isLogin: true,
      company: '',
      result: '',
      userName: '',
      phone: '',
      sex: '',
      password: ''
    }
  },

  methods: {
    submit () {
      const params = { us: this.userName, ps: this.password }
      login(params).then((res) => {
        this.result = res[0]
        window.utils.LS.set('accessToken', this.result, 60 * 24 * 3)
        if (this.result) {
          window.location = '/'
        } else {
          this.$utils.messageBox({
            type: 'error',
            message: '账户或密码不正确'
          })
        }
      }).catch(() => {})
    },
    comfirm () {
      const params = { us: this.userName, ps: this.password, phone: this.phone, sex: this.sex, company: this.company }
      newUser(params).then((res) => {
        this.result = res
        this.isLogin = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  padding-top: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 36px;
  .login-box {
    height: 600px;
    width: 500px;
    .login-title {
      font-size: 100px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: flex-end;
  }
}
</style>
