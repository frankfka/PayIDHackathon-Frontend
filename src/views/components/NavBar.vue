<template>
<div class="nav-bar">
  <BNavbar>
    <BNavbarBrand to="/">PayID</BNavbarBrand>
    <BNavbarNav class="ml-auto">
      <RouterLink to="/create">
        <BaseButton label="Create a Page"/>
      </RouterLink>
    </BNavbarNav>
  </BNavbar>
</div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'NavBar',
  components: { BaseButton },
};
</script>

<style scoped lang="scss">
.nav-bar {
  border-bottom: 1px solid gray;
}
</style>
