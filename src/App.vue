<template>
  <div id="app">
    <!--Temp alert for demo mode-->
    <BAlert show dismissible variant="warning" class="text-center demo-alert">
      This site is in demo mode. Use with caution.
    </BAlert>
    <!--Nav bar-->
    <NavBar/>
    <!--Main view-->
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
.demo-alert {
  border-radius: 0 !important;
  margin: 0 !important;
}
</style>
