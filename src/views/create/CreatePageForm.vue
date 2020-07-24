<template>
<BForm @submit="onSubmit">
  <!--PayID Input-->
  <FormTextInput v-model="payId.value" v-bind="payId"/>
  <!--Name Input-->
  <FormTextInput v-model="name.value" v-bind="name"/>
  <!--Custom Message Input-->
  <FormTextInput v-model="customMessage.value" v-bind="customMessage"/>
  <!--Request Amount Inputs-->
  <BFormGroup :label="isRequestedAmountEnabled.label">
    <BRow no-gutters>
      <BCol sm="auto">
        <FormSwitchInput v-model="isRequestedAmountEnabled.value"/>
      </BCol>
      <BCol>
        <FormTextInput
          v-model="requestedAmountValue.value"
          v-bind="requestedAmountValue"
          :disabled="!isRequestedAmountEnabled.value"
        />
      </BCol>
      <BCol sm="auto">
        <FormSelectInput
          v-model="requestedAmountCurrency.value"
          v-bind="requestedAmountCurrency"
          :disabled="!isRequestedAmountEnabled.value"
          class="col"
        />
      </BCol>
    </BRow>
  </BFormGroup>
  <!--Submit Button-->
  <BaseButton
    :label="isSubmitting ? 'Creating' : 'Create'"
    type="submit"
    :disabled="isSubmitting"
    :loading="isSubmitting"
  />
</BForm>
</template>

<script>
import FormTextInput from '../components/FormTextInput.vue';
import * as inputUtils from './CreatePageInputUtils';
import BaseButton from '../components/BaseButton.vue';
import FormSwitchInput from '../components/FormSwitchInput.vue';
import FormSelectInput from '../components/FormSelectInput.vue';

export default {
  name: 'CreatePageForm',
  components: {
    FormSelectInput, FormSwitchInput, BaseButton, FormTextInput,
  },
  data() {
    return {
      payId: inputUtils.getPayIDInputInitialState(),
      name: inputUtils.getNameInputInitialState(),
      customMessage: inputUtils.getCustomMessageInputInitialState(),
      isRequestedAmountEnabled: inputUtils.getRequestedAmountEnabledInputInitialState(),
      requestedAmountValue: inputUtils.getRequestedAmountValueInputInitialState(),
      requestedAmountCurrency: inputUtils.getRequestedAmountCurrencyInputInitialState(),
    };
  },
  props: {
    isSubmitting: Boolean,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      // Validate the form and get data
      const formData = inputUtils.validateAndCreateDataFromState(this.$data);
      if (formData) {
        // Emit data if valid
        this.$emit('submit', formData);
      }
    },
  },
};
</script>

<style scoped>

</style>
