<template>
<BCard
  class="payment-option-card"
  :title="title"
  img-top :img-src="currencyIcon"
>
  <!--Requested value-->
  <p v-if="showRequestedValue" class="requested-value-text my-2">
    {{ requestedValue }} {{ currency.code }} requested
  </p>
  <!--Text fields for each payment option info item-->
  <div>
    <ReadOnlyTextField
      class="my-1"
      v-for="item in paymentOptionInfoItems" :key="item.label + item.value"
      :label="item.label" :value="item.value"
    />
  </div>
  <template v-slot:footer>
    <!--Show QR Button-->
    <PaymentOptionShowQRButton :payment-option="paymentOption"/>
  </template>
</BCard>
</template>

<script>
import { getIconFromCurrencyCode } from '../../models/Currency';
import { validatePaymentOption } from '../payment-page/PaymentOptionUtils';
import ReadOnlyTextField from './ReadOnlyTextField.vue';
import PaymentOptionShowQRButton from './PaymentOptionShowQRButton.vue';

// Format payment info label for display
function formatPaymentInfoLabel(given) {
  if (!given) {
    return '';
  }
  // Capitalize first letter
  return given.charAt(0).toUpperCase() + given.slice(1);
}

export default {
  name: 'PaymentOptionCard',
  components: {
    PaymentOptionShowQRButton,
    ReadOnlyTextField,
  },
  data() {
    return {
      showQr: false,
    };
  },
  props: {
    paymentOption: {
      type: Object,
      required: true,
      validator: validatePaymentOption,
    },
  },
  computed: {
    currency() {
      return this.paymentOption.currency;
    },
    title() {
      return `${this.currency.name} (${this.currency.code})`;
    },
    currencyIcon() {
      return getIconFromCurrencyCode(this.currency.code);
    },
    requestedValue() {
      return this.paymentOption.value;
    },
    showRequestedValue() {
      return !!this.requestedValue;
    },
    paymentOptionInfoItems() {
      return Object.entries(this.paymentOption.paymentInfo).map((entry) => ({
        label: formatPaymentInfoLabel(entry[0]),
        value: entry[1],
      }));
    },
  },
};
</script>

<style scoped lang="scss">
.card-img-top {
  // Override bootstrap styling
  max-width: 128px;
  margin: auto;
  padding-top: 2em;
  padding-bottom: 2em;
}
.requested-value-text {
  color: $color-text-secondary
}
</style>
