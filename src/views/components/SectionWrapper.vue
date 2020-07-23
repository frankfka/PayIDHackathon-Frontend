<template>
<div class="portfolio-section">
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
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 10vh 10vw;
  @media (min-width: map-get($grid-breakpoints, xl)) {
    padding: 15vh 15vw;
  }
}
</style>
