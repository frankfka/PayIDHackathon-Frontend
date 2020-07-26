<template>
<div class="nav-bar py-2">
  <BNavbar>
    <BNavbarBrand :to="homePath" class="brand-link">MyPayID</BNavbarBrand>
    <BNavbarNav class="ml-auto">
      <BaseButton label="Create a Page" :to="createPath" outlined/>
    </BNavbarNav>
  </BNavbar>
</div>
</template>

<script>
import { CREATE_PATH, HOME_PATH } from '../../constants/routes';
import BaseButton from './BaseButton.vue';

export default {
  name: 'NavBar',
  components: { BaseButton },
  computed: {
    createPath() {
      return CREATE_PATH;
    },
    homePath() {
      return HOME_PATH;
    },
  },
};
</script>

<style scoped lang="scss">
.brand-link {
  color: $color-text !important;
}
.nav-bar {
  background: $color-background-dark;
}
</style>
