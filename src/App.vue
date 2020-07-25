<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import NavBar from './views/components/NavBar.vue';

// Bootstrap init
Vue.use(BootstrapVue);

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
