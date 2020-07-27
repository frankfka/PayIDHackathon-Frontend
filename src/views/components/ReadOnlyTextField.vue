<template>
  <div>
    <!--Toast-->
    <BToast v-model="showCopiedToast" no-close-button auto-hide-delay="2000">
      Copied!
    </BToast>
    <!--Actual content-->
    <p>{{ label }}</p>
    <BRow align-v="center" class="mt-1" no-gutters>
      <FormTextInput readonly :value="value" class="mb-0 mr-3 flex-grow-1"/>
      <div class="d-inline-flex my-1">
        <BaseButton
          outlined size="sm"
          v-clipboard:copy="value"
          v-clipboard:success="() => { this.showCopiedToast = true; }"
          label="Copy"
          class="mr-2"
        />
      </div>
    </BRow>
  </div>
</template>

<script>
import FormTextInput from './form/FormTextInput.vue';
import BaseButton from './BaseButton.vue';

export default {
  name: 'ReadOnlyTextField',
  components: { BaseButton, FormTextInput },
  data() {
    return {
      showCopiedToast: false,
    };
  },
  props: {
    label: String,
    value: String,
  },
};
</script>

<style scoped>

</style>
