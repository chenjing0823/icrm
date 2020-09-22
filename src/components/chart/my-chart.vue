<!--
 * @Author: jing.chen
 * @Date: 2020-09-22 15:13:44
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-22 16:02:36
 * @Description: bar-simple
-->
<template>
  <div ref="view" class="my-chart">
  </div>
</template>

<script>
export default {
  name: 'my-chart',

  components: {
  },

  filters: {
  },

  mixins: [],
  props: {
    options: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  data () {
    return {
      myChart: null
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
    this.drawLine()
    this.setChartOption(this.options)
  },

  methods: {
    drawLine () {
      const chartDom = this.$refs.view
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(chartDom)
    },

    /**
     * @description 绘制图表
     * @param {Object} [option] 图表的所有参数类型
     * @param {String} [type] 是否需要重新绘制
     */
    setChartOption (option, type) {
      // 绘制图表
      if (option === null || option === undefined || (option && option.length === 0)) {
        return false
      }
      if (type === 'resize') {
        this.myChart.setOption(option, true)
      } else {
        this.myChart.setOption(option)
      }

      this.$nextTick(() => {
        // 容器改变时重新绘制
        // const graph = document.querySelector('.graph')
        // window.onresize = () => {
        //   this.resize()
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-chart {
  height: 100%;
  width: 100%;
}
</style>
