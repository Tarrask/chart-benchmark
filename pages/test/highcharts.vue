<template>
<div>
  <h2><a href="http://www.highcharts.com/" target="_blank">highcharts</a></h2>
  <div ref="chart" class="chart"></div>
</div>
</template>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>

<script>
let Highcharts;

export default {
  data() {
    return {
      dataType: 'array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      Highcharts.chart(this.$refs.chart, {
        chart: {
          animation: false
        },
        plotOptions: {
          series: {
            animation: false
          }
        },
        series: [{
          type: 'line',
          data: dataset,
          marker: { enabled: false }
        }]
      });
    }
  },
  async mounted() {
    Highcharts = require('highcharts');
  }
};
</script>
