<template>
<div>
  <h2><a href="https://www.chartjs.org/" target="_blank">chart.js</a></h2>
  <canvas ref='graph' width='600' height='400'></canvas>
</div>
</template>

<script>
let Chart;

export default {
  data() {
    return {
      dataType: 'object'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      const graph = new Chart(this.$refs.graph, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Dataset',
            data: dataset,
            fill: false,
            pointRadius: 0 // disables point rendering
          }]
        },
        options: {
          responsive: false,
          elements: {
            line: {
              tension: 0 // disables bezier curves
            }
          },
          animation: {
            duration: 0 // general animation time
          },
          scales: {
            xAxes: [{
              type: 'linear'
            }]
          }
        }
      });
    }
  },
  async mounted() {
    Chart = await require('chart.js');
  }
};
</script>
