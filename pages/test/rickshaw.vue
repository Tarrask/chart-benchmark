<template>
<div>
  <h2><a href="https://shutterstock.github.io/rickshaw/" target="_blank">Rickshaw</a></h2>
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
let Rickshaw;

export default {
  data() {
    return {
      /*
       *
       */
      dataType: 'object'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      while(this.$refs.chart.firstChild) {
        this.$refs.chart.removeChild(this.$refs.chart.firstChild);
      }

      const graph = new Rickshaw.Graph({
        element: this.$refs.chart, 
        series: [ { data: dataset, color: 'steelblue' } ],
        renderer: 'line',
        min: 'auto',
        interpolation: false
      });
      graph.render();
    }
  },
  async mounted() {
    Rickshaw = await require('rickshaw');
  }
};
</script>
