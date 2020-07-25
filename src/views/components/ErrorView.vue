<template>
<div class="error-view full-width-centered">
<!--TODO: Image https://undraw.co/search-->
  {{ message }}
</div>
</template>

<script>
export default {
  name: 'ErrorView',
  props: {
    message: {
      type: String,
      default: 'Something went wrong.',
    },
  },
};
</script>

<style scoped>

</style>
