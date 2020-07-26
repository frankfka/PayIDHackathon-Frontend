<template>
<BCard
  class="payment-option-card"
  :title="title"
  img-top :img-src="currencyIcon"
>
  <!--QR Modal-->
  <BModal v-model="showQr" centered hide-footer hide-header>
    <div class="text-center">
      <PaymentOptionQR
        :address="address" :currency-code="currencyCode" :requested-value="requestedValue"
      />
    </div>
  </BModal>
  <!--Main card-->
  <BCardText class="py-1">
    <p>Payment Address</p>
    <BRow align-v="center" class="mt-1" no-gutters>
      <FormTextInput readonly :value="address" class="mb-0 mr-3 flex-grow-1"/>
      <!--TODO: copy success message-->
      <div class="d-inline-flex my-1">
        <BaseButton
          outlined size="sm"
          v-clipboard:copy="address"
          label="Copy"
          class="mr-2"
        />
        <BaseButton
          outlined size="sm"
          label="Show QR"
          @click="() => { this.showQr = true }"
        />
      </div>
    </BRow>
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
import BaseButton from './BaseButton.vue';
import PaymentOptionQR from './PaymentOptionQR.vue';

const CURRENCY_TO_ICON = {
  BTC: BTCIcon,
  XRP: XRPIcon,
};

export default {
  name: 'PaymentOptionCard',
  components: { PaymentOptionQR, BaseButton, FormTextInput },
  data() {
    return {
      showQr: false,
    };
  },
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
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
