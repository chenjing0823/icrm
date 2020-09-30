<!--
 * @Author: jing.chen
 * @Date: 2020-09-30 15:30:31
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-30 15:36:24
 * @Description:
-->
<template>
  <div class="manage-center">
    <div @click="manageCenter()" class="block">管理中心</div>
  </div>
</template>

<script>
export default {
  name: 'manage-center',

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
    manageCenter () {
      this.$router.push('/manageCenter')
    }
  }
}
</script>

<style lang="scss" scoped>
.manage-center {
  padding: 0 20px;
  .block {
    cursor: pointer;
  }
}
</style>
