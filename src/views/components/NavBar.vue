<template>
<div class="nav-bar">
  <BNavbar>
    <BNavbarBrand :to="homePath">PayID</BNavbarBrand>
    <BNavbarNav class="ml-auto">
      <BaseButton label="Create a Page" :to="createPath"/>
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
.nav-bar {
  border-bottom: 1px solid gray;
}
</style>
