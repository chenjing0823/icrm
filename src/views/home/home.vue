<!--
 * @Author: jing.chen
 * @Date: 2020-09-08 15:27:45
 * @LastEditors: jing.chen
 * @LastEditTime: 2020-09-22 16:47:15
 * @Description:
-->
<template>
  <div class="home">
    <layout>
      <div slot="top">图表使用</div>
      <div slot="body" class="home-body">
        <!-- 生成图已经抽出组件 只需要传相关图表必要参数即可，可以去echarts官网找到需要的图表类型，将相关配置传入即可 -->
        <chart :options="options_1" class="line-chart" />
        <chart :options="options_2" class="line-chart" />
        <chart :options="options_3" class="line-chart" />
        <chart :options="options_4" class="line-chart" />
      </div>
    </layout>
  </div>
</template>

<script>
import layoutMixin from '@/components/main-layout/layout-mixin.js'
import chart from '@/components/chart/my-chart.vue'

import chartMixin from './chart-mixin.js'
export default {
  name: 'home',
  mixins: [
    layoutMixin,
    chartMixin
  ],
  components: {
    chart
  },
  data () {
    return {
      options_1: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .line-chart {
    height: 500px;
    width: 500px;
    flex: 1 0 auto;
  }
}

</style>
