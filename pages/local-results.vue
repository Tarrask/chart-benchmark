<template>
<div class="container">
  <table border="1">
    <thead>
      <tr>
        <th></th>
        <th :colspan="samples.length">&mdash;&mdash; Samples &mdash;&mdash;</th>
      </tr>
      <tr>
        <th>Library</th>
        <th v-for="sample in samples">{{ sample }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="library in libraries" :key="library.path">
        <td>{{ library.name }}</td>
        <td v-for="sample in samples">{{ (results[library.name] && results[library.name][sample]) ? results[library.name][sample] : '-' }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data() {
    const testRoutes = this.$router.options.routes.find(el => el.path === '/test');
    const libraries = testRoutes.children.reduce((acc, route) => {
      if(route.path !== '') {
        acc.push({ name: route.path, url: '/test/' + route.path });
      }
      return acc;
    }, []);

    return {
      libraries,
      results: {},
      samples: [10, 100, 1000, 10000, 100000, 500000, 1000000]
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
  }
};
</script>
