<template>
<div
  class="full-width-centered loading-view"
>
  <BaseSpinner/>
</div>
</template>

<script>
import BaseSpinner from './BaseSpinner.vue';

/**
 * Wrapper for the spinner that will align the spinner in the center
*/
export default {
  name: 'LoadingView',
  components: { BaseSpinner },
};
</script>

<style scoped lang="scss">
.loading-view {
  color: $color-primary;
}
</style>
