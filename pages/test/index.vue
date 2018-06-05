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
    return {
      libraries: this.$store.state.libraries
    };
  }
};
</script>
