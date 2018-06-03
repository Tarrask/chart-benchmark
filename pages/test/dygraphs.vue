<template>
<div>
  <h2><a href="http://dygraphs.com/" target="_blank">dygraphs</a></h2>
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
let Dygraph;

export default {
  data() {
    return {
      dataType: 'array'
    };
  },
  methods: {
    async runBenchmark(dataset) {
      const graph = new Dygraph(this.$refs.graph, dataset);
    }
  },
  async mounted() {
    Dygraph = await require('dygraphs').default;
  }
};
</script>
