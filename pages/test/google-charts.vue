<template>
<div>
  <h2><a href="https://developers.google.com/chart/" target="_blank">Google charts</a></h2>
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
let GoogleCharts;

export default {
  data() {
    return {
      dataType: 'array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      const el = this.$refs.chart;
      //GoogleCharts.load(drawChart);
      //function drawChart() {
      const data = new GoogleCharts.api.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'value');
      data.addRows(dataset);
      const chart = new GoogleCharts.api.visualization.LineChart(el);
      chart.draw(data);
      //}
    }
  },
  async mounted() {
    GoogleCharts = await require('google-charts').GoogleCharts;
    GoogleCharts.load();
  }
};
</script>
