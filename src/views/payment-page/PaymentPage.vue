<template>
  <div class="payment-page">
    <h1>Payment Page</h1>
    <p>{{ pageId }}</p>
  </div>
</template>

<script>
import { PAGE_ID_KEY } from '../../constants/routes';

export default {
  name: 'PaymentPage',
  computed: {
    pageId() {
      return this.$route.params[PAGE_ID_KEY];
    },
  },
};
</script>

<style scoped>

</style>
