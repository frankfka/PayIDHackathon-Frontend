<template>
<div class="page-wrapper d-flex align-items-center">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'PageWrapper',
};
</script>

<style lang="scss">
.page-wrapper {
  min-height: 70vh;
  padding: 5vh 5vw;
  @media (min-width: map-get($grid-breakpoints, xl)) {
    padding: 15vh 10vw;
  }
}
</style>
