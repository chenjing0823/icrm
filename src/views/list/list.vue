<!--
 * @Author: jing.chen
 * @Date: 2020-09-08 15:29:36
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-08 15:48:27
 * @Description:
-->
<template>
  <div class="list">
    列表
  </div>
</template>

<script>
import { listForm } from '@/api/common.js'
export default {
  name: 'list',

  created () {
    const params = { appid: 100 }
    listForm(params).then(res => {
      console.log(res)
    })
  },

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
  }
}
</script>

<style lang="scss" scoped>

</style>
