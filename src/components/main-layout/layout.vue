<!--
 * @Author: jing.chen
 * @Date: 2020-09-22 15:21:15
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-22 16:45:00
 * @Description:
-->
<template>
  <div class="layout">
    <div class="layout-head">
      <slot name="top" v-if="$slots.top"></slot>
    </div>
    <div class="layout-body">
      <el-scrollbar style="height:100%;width:100%">
        <slot name="body"></slot>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',

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
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $text-white;
  .layout-head {
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 20px;
    color: $text-title;
    font-size: 14px;
    text-align: left;
    font-family: Roboto;
    padding: 0 10px;
    border-bottom: 1px solid $base-lineGray;
  }
  .layout-body {
    height: calc(100% - 50px);
  }
}
</style>
