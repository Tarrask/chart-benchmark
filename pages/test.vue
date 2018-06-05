<template>
<div class="container">
  <div class="side">
    <div class="controls" :class="{ disabled: controlsDisabled }">
      <label for="dataCount">Number of points</label>
      <select :disabled="controlsDisabled" v-model="sample">
        <option v-for="s in samples" :value="s">{{ s.toLocaleString() }}</option>
      </select>
      <button :disabled="controlsDisabled" @click="runBenchSuite">Run 10x benchmark</button>
      <nuxt-link to="/test">Back to libraries list</nuxt-link>
      <nuxt-link to="/test/results">View results</nuxt-link>
    </div>
    <div class="logs">
      <h2>Benchmark logs</h2>
      <pre>{{ log }}</pre>
    </div>
  </div>
  <div class="chart-area">
    <nuxt-child ref="child"></nuxt-child>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      samples: this.$store.state.samples,
      sample: 100,
      time: 0,
      log: ''
    };
  },
  transition: {
    beforeEnter(el) {
      console.log('beforeEnter', el);
    }
  },
  computed: {
    controlsDisabled() {
      return this.$route.path === '/test' || this.$route.path === '/test/results';
    }
  },
  methods: {
    async runBenchSuite() {
      let storageKey = `${this.$route.path.substring(6)}-${this.sample}`;
      let storageValue = [];
      localStorage.setItem(storageKey, storageValue);

      this.log = '';
      let totalTime = 0;
      for(let i = 0; i < 10; i++) {
        let time = Date.now();
        this.log += 'Generating dataset... ';

        // Generating data with the library prefered structure
        const dataset = [];
        if(this.$refs.child.dataType === 'object') {
          for(let i = 0; i < this.sample; i++) {
            dataset.push({x: i, y: Math.random() + Math.sin(i / this.sample * 10)});
          }
        }
        else if(this.$refs.child.dataType === 'double-array') {
          dataset.x = [];
          dataset.y = [];
          for(let i = 0; i < this.sample; i++) {
            dataset.x.push(i);
            dataset.y.push(Math.random() + Math.sin(i / this.sample * 10));
          }
        }
        else {
          for(let i = 0; i < this.sample; i++) {
            dataset.push([i, Math.random() + Math.sin(i / this.sample * 10)]);
          }
        }

        this.log += (Date.now() - time) + 'ms.\n';
        time = Date.now();
        this.log += 'Generating chart... ';

        await this.$refs.child.runBenchmark(dataset);

        // setTimeout to let the chart and browser time to redraw
        totalTime += await new Promise(resolve => {
          setTimeout(() => {
            let timeSpent = Date.now() - time - 1;
            storageValue.push(timeSpent);
            localStorage.setItem(storageKey, storageValue);
            this.log += timeSpent + 'ms.\n';
            resolve(timeSpent);
          }, 1);
        });

        // wait a bit, to give an oportunitiy for the browser to garbageCollect
        await new Promise(resolve => {
          setTimeout(() => { resolve(); }, 100);
        });
      }
      this.log += 'Average time: ' + (totalTime / 10);
    }
  }
};
</script>
