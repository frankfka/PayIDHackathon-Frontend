<template>
<div
  class="full-width-centered loading-view"
>
  <BaseSpinner class="loadable-content-wrapper-spinner"/>
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
</style>
