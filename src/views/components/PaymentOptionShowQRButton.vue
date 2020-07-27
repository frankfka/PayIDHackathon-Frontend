<template>
  <div>
    <!--QR Modal-->
    <BModal v-model="showQr" centered hide-footer hide-header>
      <div class="text-center">
        <QRCode :value="qrCodeValue" />
      </div>
    </BModal>
    <!--Show QR Button-->
    <div class="text-center">
      <BaseButton
        outlined size="sm" label="Show QR"
        :disabled="enableShowQrCode"
        @click="() => {this.showQr = true}"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import QRCode from './QRCode.vue';
import { validatePaymentOption, getQrValue } from '../payment-page/PaymentOptionUtils';
/**
 * Button and QR modal to embed in the PaymentOptionCardFooter
 */
export default {
  name: 'PaymentOptionShowQRButton',
  components: { QRCode, BaseButton },
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
    qrCodeValue() {
      return getQrValue(this.paymentOption);
    },
    enableShowQrCode() {
      return !this.qrCodeValue;
    },
  },
};
</script>

<style scoped>

</style>
