<template>
<div>
  <h2><a href="https://naver.github.io/billboard.js/" target="_blank">billboard.js</a></h2>
  <div ref="chart" class="chart"></div>
</div>
</template>

<style>
@import 'node_modules/billboard.js/dist/billboard.css';
</style>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>

<script>
let bb;

export default {
  data() {
    return {
      dataType: 'double-array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      bb.generate({
        bindto: this.$refs.chart,
        data: {
          type: 'line',
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
    bb = await require('billboard.js').default;
  }
};
</script>
