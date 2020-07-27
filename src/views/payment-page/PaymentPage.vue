<template>
<div class="payment-page">
  <PageWrapper>
    <div class="w-100">
      <!--Loading animation-->
      <LoadingView v-if="isLoading" class="loading"/>
      <!--Error view-->
      <ErrorView v-if="error" class="error-view"/>
      <!--Main view-->
      <div v-if="!isLoading && !error && pageData">
        <!--Header section-->
        <div class="section">
          <h1>{{ pageTitle }}</h1>
          <p class="mt-1">{{ customMessage }}</p>
        </div>
        <!--Payment Options Section-->
        <div class="section">
          <div class="mb-3">
            <h4>Payment Options</h4>
            <p>The current associated payment options for PayID: {{ payId }}</p>
          </div>
          <!--Show options as cards-->
          <BCardGroup deck v-if="hasPaymentOptions">
            <PaymentOptionCard
              class="payment-option-card"
              v-for="option in paymentOptions"
              v-bind:key="option.currencyCode"
              :payment-option="option"
            />
          </BCardGroup>
          <!--No options text-->
          <div class="no-options-section full-width-centered" v-else>
            No payment options available for this PayID.
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</div>
</template>

<script>
import { getPage } from '../../services/api';
import { PAGE_ID_KEY } from '../../constants/routes';
import { getPaymentPageDataFromResponse } from './PaymentOptionUtils';
import LoadingView from '../components/LoadingView.vue';
import PaymentOptionCard from '../components/PaymentOptionCard.vue';
import ErrorView from '../components/ErrorView.vue';
import PageWrapper from '../components/PageWrapper.vue';

export default {
  name: 'PaymentPage',
  components: {
    PageWrapper, ErrorView, PaymentOptionCard, LoadingView,
  },
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
    getPage(this.pageId)
      .then((fetchedData) => {
        this.isLoading = false;
        this.error = false;
        this.pageData = getPaymentPageDataFromResponse(fetchedData);
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
}
.no-options-section {
  height: 40vh;
}
.section {
  margin: ($spacer * 2) auto;
}
.payment-option-card {
  // TODO: Mobile
  max-width: 25vw;
}
</style>
