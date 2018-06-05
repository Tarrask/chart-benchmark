<template>
<div class="container results">
  <h2>Static results - <small>collected before uploading those pages</small></h2>
  <table><thead><tr><th></th><th colspan="7" class="sans-serif">—— Samples ——</th></tr><tr><th class="text-left sans-serif">Library</th><th>10</th><th>100</th><th>1&nbsp;000</th><th>10&nbsp;000</th><th>100&nbsp;000</th><th>500&nbsp;000</th><th>1&nbsp;000&nbsp;000</th></tr></thead><tbody><tr><td class="text-left sans-serif">c3</td><td class="green">74</td><td class="yellow">135</td><td class="yellow">730</td><td class="red">15&nbsp;509</td><td class="red">-</td><td class="red">-</td><td class="red">-</td></tr><tr><td class="text-left sans-serif">rickshaw</td><td class="green">13</td><td class="green">14</td><td class="green">13</td><td class="green">49</td><td class="yellow">299</td><td class="red">1&nbsp;555</td><td class="red">4&nbsp;900</td></tr><tr><td class="text-left sans-serif">plotly.js</td><td class="green">47</td><td class="green">59</td><td class="green">45</td><td class="green">69</td><td class="yellow">108</td><td class="yellow">354</td><td class="yellow">832</td></tr><tr><td class="text-left sans-serif">google-charts</td><td class="green">42</td><td class="green">47</td><td class="yellow">127</td><td class="red">1&nbsp;383</td><td class="red">71&nbsp;771</td><td class="red">-</td><td class="red">-</td></tr><tr><td class="text-left sans-serif">chart.js</td><td class="green">19</td><td class="green">21</td><td class="green">38</td><td class="yellow">228</td><td class="red">2&nbsp;616</td><td class="red">-</td><td class="red">-</td></tr><tr><td class="text-left sans-serif">billboard.js</td><td class="green">83</td><td class="green">95</td><td class="yellow">445</td><td class="red">7&nbsp;053</td><td class="red">-</td><td class="red">-</td><td class="red">-</td></tr><tr><td class="text-left sans-serif">dygraphs</td><td class="green">19</td><td class="green">21</td><td class="green">18</td><td class="green">27</td><td class="yellow">184</td><td class="yellow">467</td><td class="yellow">894</td></tr><tr><td class="text-left sans-serif">highcharts</td><td class="green">46</td><td class="green">48</td><td class="green">62</td><td class="yellow">343</td><td class="red">8&nbsp;888</td><td class="red">-</td><td class="red">-</td></tr><tr><td class="text-left sans-serif">metrics-graphics.js</td><td class="green">18</td><td class="green">35</td><td class="yellow">115</td><td class="red">3&nbsp;602</td><td class="red">-</td><td class="red">-</td><td class="red">-</td></tr></tbody></table>

  <h2>Local results <small>- from run you made, stored in localStorage</small></h2>
  <table>
    <thead>
      <tr>
        <th></th>
        <th class="sans-serif" :colspan="samples.length">&mdash;&mdash; Samples &mdash;&mdash;</th>
      </tr>
      <tr>
        <th class="text-left sans-serif">Library</th>
        <th v-for="sample in samples">{{ sample.toLocaleString() }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="library in libraries" :key="library.path">
        <td class="text-left sans-serif">{{ library.name }}</td>
        <td v-for="sample in samples" :class="getColor(library.name, sample)">{{ (results[library.name] && results[library.name][sample]) ? results[library.name][sample].toLocaleString(undefined, { maximumFractionDigits: 0 }) : '-' }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data() {
    return {
      results: {},
      libraries: this.$store.state.libraries,
      samples: this.$store.state.samples
    };
  },
  mounted() {
    for(let library of this.libraries) {
      for(let sample of this.samples) {
        let storageKey = `${library.name}-${sample}`;
        let results = localStorage.getItem(storageKey);
        if(results) {
          if(!this.results[library.name]) this.$set(this.results, library.name, {});
          this.$set(this.results[library.name], sample, results.split(',').reduce((acc, el) => acc + parseInt(el), 0) / 10);
        }
      }
    }
  },
  methods: {
    getColor(name, sample) {
      if(this.results[name] && this.results[name][sample]) {
        let val = this.results[name][sample];
        if(val < 100) return 'green';
        if(val > 1000) return 'red';
        return 'yellow';
      }
      return 'red';
    }
  }
};
</script>
