<template>
<VueQr
  :text="value"
/>
</template>

<script>
import VueQr from 'vue-qr';

export default {
  name: 'QRCode',
  components: { VueQr },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
