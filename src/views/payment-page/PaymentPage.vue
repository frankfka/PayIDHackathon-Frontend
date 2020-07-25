<template>
<div class="payment-page">
  <!--Loading animation-->
  <LoadingView v-if="isLoading" class="loading"/>
  <!--Error view-->
  <ErrorView v-if="error" class="error-view"/>
  <!--Main view-->
  <div v-if="!isLoading && !error && pageData">
    <h1>{{ pageTitle }}</h1>
    <p>{{ customMessage }}</p>
    <div class="payments-section">
      <p>Pay with PayID: {{ payId }}</p>
      <BCardGroup deck v-if="hasPaymentOptions">
        <PaymentOptionCard
          class="payment-option-card"
          v-for="option in paymentOptions"
          v-bind:key="option.currencyCode"
          :currency-code="option.currencyCode"
          :address="option.address"
          :requested-value="option.value"
        />
      </BCardGroup>
      <div class="no-options-section full-width-centered" v-else>
        No payment options available for this PayID.
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getPage } from '../../services/api';
import { PAGE_ID_KEY } from '../../constants/routes';
import LoadingView from '../components/LoadingView.vue';
import PaymentOptionCard from '../components/PaymentOptionCard.vue';
import ErrorView from '../components/ErrorView.vue';

export default {
  name: 'PaymentPage',
  components: { ErrorView, PaymentOptionCard, LoadingView },
  data() {
    return {
      error: false,
      isLoading: false,
      pageData: null,
    };
  },
  computed: {
    // ID from page, retrieved from path
    pageId() {
      return this.$route.params[PAGE_ID_KEY];
    },
    // Page title to show
    pageTitle() {
      if (this.pageData?.name) {
        // Name provided
        return `${this.pageData.name}'s Payment Page`;
      }
      return 'Payment Page';
    },
    // Custom message
    customMessage() {
      return this.pageData?.customMessage || '';
    },
    // PayID
    payId() {
      return this.pageData?.payId || '';
    },
    // Payment options
    hasPaymentOptions() {
      return this.paymentOptions.length > 0;
    },
    paymentOptions() {
      return this.pageData?.paymentOptions || [];
    },
  },
  created() {
    this.isLoading = true;
    // Run fetch on creation
    console.log(this.pageId);
    getPage(this.pageId)
      .then((fetchedData) => {
        this.isLoading = false;
        this.error = true;
        this.pageData = fetchedData;
      })
      .catch((error) => {
        console.error(error);
        this.isLoading = false;
        this.error = true;
      });
  },
};
</script>

<style scoped lang="scss">
.loading, .error-view {
  @extend .full-width-centered;
  min-height: 80vh;
}
.payment-option-card {
  max-width: 25vw;
}
</style>
