<template>
<div>
  <h2><a href="https://plot.ly/plotly-js-scientific-d3-charting-library/" target="_blank">plotly.js</a></h2>
  <div ref="graph" class="chart"></div>
</div>
</template>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>

<script>
let Plotly;

export default {
  data() {
    return {
      dataType: 'double-array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      dataset.type = 'scatter';
      dataset.mode = 'lines',
      console.log(dataset);
      var data = [
        {
          x: dataset.x,
          y: [1, 1, 3, 6, 1, 3, 6, 1, 3, 6],
          type: 'scatter'
        }
      ];
      const graph = Plotly.newPlot(this.$refs.graph, [ dataset ], {
        margin: { l: 20, r: 0, b: 20, t: 0 }
      });
    }
  },
  async mounted() {
    Plotly = require('plotly.js');
  }
};
</script>
