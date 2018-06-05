<template>
<div>
  <h2><a href="https://www.metricsgraphicsjs.org/" target="_blank">MetricsGraphics.js</a></h2>
  <div ref="chart" class="chart"></div>
</div>
</template>

<style>
@import 'node_modules/metrics-graphics/dist/metricsgraphics.css';
</style>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>

<script>
let d3, MG;

export default {
  data() {
    return {
      dataType: 'object'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      MG.data_graphic({
        chart_type: 'line',
        data: dataset,
        target: this.$refs.chart,
        x_accessor: 'x',
        y_accessor: 'y',
        area: false,
        full_height: true,
        full_width: true,
        interpolate: d3.curveLinear,
        animate_on_load: false,
        transition_on_update: false
      });
    }
  },
  async mounted() {
    d3 = await require('d3');
    MG = await require('metrics-graphics');
    console.log(MG);
  }
};
</script>
