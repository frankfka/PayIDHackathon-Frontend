<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
// TODO: Cleanup, attributions to undraw, badges page, meta tags and favicon
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
  background-color: $color-background;
  min-height: 100vh;
}
</style>
