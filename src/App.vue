<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
// TODO: Cleanup, attributions to undraw, badges page, meta tags and favicon
// TODO: Generalize "section" classes as a wrapper
import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueClipboard from 'vue-clipboard2';

import NavBar from './views/components/NavBar.vue';

// Bootstrap init
Vue.use(BootstrapVue);

// Copy to clipboard
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

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
