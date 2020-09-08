<!--
 * @Author: jing.chen
 * @Date: 2020-08-31 10:34:45
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:31:04
 * @Description:
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
