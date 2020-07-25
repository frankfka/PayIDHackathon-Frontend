<template>
<div class="portfolio-section d-flex align-items-center">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'SectionWrapper',
};
</script>

<style lang="scss">
.portfolio-section {
  min-height: 60vh;
  padding: 5vh 5vw;
  @media (min-width: map-get($grid-breakpoints, xl)) {
    padding: 15vh 10vw;
  }
}
</style>
