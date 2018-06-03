<template>
<div>
  <h2>Please select a chart library</h2>
  <ul>
    <li v-for="library in libraries" :key="library.path"><nuxt-link :to="library.url">{{ library.name }}</nuxt-link></li>
  </ul>
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
      libraries
    };
  }
};
</script>
