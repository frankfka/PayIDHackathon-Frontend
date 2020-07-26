<template>
<VueQr
  :text="qrValue"
/>
</template>

<script>
import VueQr from 'vue-qr';

// TODO: compute proper URI with amount - probably as a function in the currency object?

export default {
  name: 'PaymentOptionQR',
  components: { VueQr },
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
    qrValue() {
      return this.address;
    },
  },
};
</script>

<style scoped>

</style>
