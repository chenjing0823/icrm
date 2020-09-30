<!--
 * @Author: jing.chen
 * @Date: 2020-09-30 15:34:45
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:39:25
 * @Description:
-->
<template>
  <div class="index">
    <el-button type="primary" @click="goBack()">回退</el-button>
    管理中心页
  </div>
</template>

<script>
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
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
