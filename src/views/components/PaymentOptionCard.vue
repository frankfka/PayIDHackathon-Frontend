<template>
<BCard
  class="payment-option-card"
  :title="title"
  img-top :img-src="currencyIcon"
>
  <BCardText>
    <FormTextInput readonly :value="address" label="Payment Address"/>
  </BCardText>
  <template v-slot:footer v-if="showRequestedValue">
    {{ requestedValue }} {{ currencyCode }} requested
  </template>
</BCard>
</template>

<script>
import BTCIcon from '../../assets/currency-icons/btc.png';
import XRPIcon from '../../assets/currency-icons/xrp.png';
import { getCurrencyFromCode } from '../../models/Currency';
import FormTextInput from './form/FormTextInput.vue';

// TODO: QR Code, copy address

const CURRENCY_TO_ICON = {
  BTC: BTCIcon,
  XRP: XRPIcon,
};

export default {
  name: 'PaymentOptionCard',
  components: { FormTextInput },
  props: {
    currencyCode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    requestedValue: {
      type: Number,
      default: null,
    },
  },
  computed: {
    currency() {
      return getCurrencyFromCode(this.currencyCode);
    },
    title() {
      return `${this.currency.name} (${this.currency.code})`;
    },
    currencyIcon() {
      return CURRENCY_TO_ICON[this.currencyCode];
    },
    showRequestedValue() {
      return !!this.requestedValue;
    },
  },
};
</script>

<style scoped lang="scss">
.card-img-top {
  // Override bootstrap styling
  max-width: 128px;
  margin: auto;
}
</style>
