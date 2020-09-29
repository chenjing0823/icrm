<!--
 * @Author: jing.chen
 * @Date: 2020-09-29 16:41:11
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-29 19:29:06
 * @Description: 登录页
-->
<template>
  <div class="index">
    <template v-if="isLogin">
      用户名：<el-input v-model="userName"></el-input>
      密码：<el-input v-model="password"></el-input>
      <el-button type="primary" @click="submit()">登录</el-button>
      <el-button type="primary" @click="isLogin = false">注册</el-button>
    </template>
    <template v-else>
      用户名：<el-input v-model="userName"></el-input>
      密码：<el-input v-model="password"></el-input>
      电话：<el-input v-model="phone"></el-input>
      性别：<el-input v-model="sex"></el-input>
      <el-button type="primary" @click="comfirm()">注册</el-button>
    </template>
      <div>
        请求结果是{{result}}
      </div>
  </div>
</template>

<script>
import { login, newUser } from '@/api/common'
export default {
  name: 'index',

  components: {
  },

  filters: {
  },

  mixins: [],
  props: {
  },

  data () {
    return {
      isLogin: true,
      result: '',
      userName: '',
      phone: '',
      sex: '',
      password: ''
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    submit () {
      login({
        us: this.userName,
        ps: this.password
      }).then((res) => {
        this.result = res[0]
        console.log('this.result', this.result)
        window.utils.LS.set('accessToken', this.result, 60 * 24 * 3)
        window.location = '/'
      })
    },
    comfirm () {
      newUser({
        us: this.userName,
        ps: this.password,
        phone: this.phone,
        sex: this.sex
      }).then((res) => {
        this.result = res
        this.isLogin = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
