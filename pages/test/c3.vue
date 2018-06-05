<template>
<div>
  <h2><a href="http://c3js.org/" target="_blank">C3.js</a></h2>
  <div ref="chart" class="chart"></div>
</div>
</template>

<style>
@import 'node_modules/c3/c3.css';
</style>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>

<script>
let c3;

export default {
  data() {
    return {
      dataType: 'double-array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      c3.generate({
        bindto: this.$refs.chart,
        data: {
          x: 'x',
          columns: [ ['x', ...dataset.x], ['values', ...dataset.y] ]
        },
        point: {
          show: false
        },
        size: {
          width: 600,
          height: 400
        }
      });
    }
  },
  async mounted() {
    c3 = await require('c3');
  }
};
</script>
