<template>
<BForm @submit="onSubmit">
  <!--PayID Input-->
  <FormTextInput v-model="payId.value" v-bind="payId"/>
  <!--Name Input-->
  <FormTextInput v-model="name.value" v-bind="name"/>
  <!--Custom Message Input-->
  <FormTextInput v-model="customMessage.value" v-bind="customMessage"/>
  <!--Request Amount Inputs-->
  <BFormGroup
    :label="isRequestedAmountEnabled.label"
    :invalid-feedback="requestedAmountValue.invalidFeedback"
    :state="isRequestedAmountInputGroupValid"
  >
    <BRow align-v="center">
      <BCol sm="auto">
        <FormSwitchInput v-model="isRequestedAmountEnabled.value"/>
      </BCol>
      <BCol>
        <FormTextInput
          v-model="requestedAmountValue.value"
          :is-valid="isRequestedAmountValueValid"
          :placeholder="requestedAmountValue.placeholder"
          :type="requestedAmountValue.type"
          :disabled="!isRequestedAmountEnabled.value"
          class="mb-0"
        />
      </BCol>
      <BCol sm="auto">
        <FormSelectInput
          v-model="requestedAmountCurrency.value"
          :is-valid="isRequestedAmountCurrencyValid"
          :options="requestedAmountCurrency.options"
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
    outlined
  />
</BForm>
</template>

<script>
import FormTextInput from '../components/form/FormTextInput.vue';
import * as inputUtils from './CreatePageInputUtils';
import BaseButton from '../components/BaseButton.vue';
import FormSwitchInput from '../components/form/FormSwitchInput.vue';
import FormSelectInput from '../components/form/FormSelectInput.vue';

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
  computed: {
    // For overall input group for requested amount
    isRequestedAmountInputGroupValid() {
      if (
        this.isRequestedAmountEnabled.value
        && this.requestedAmountValue.isValid != null
        && this.requestedAmountCurrency.isValid != null
        && (!this.requestedAmountCurrency.isValid || !this.requestedAmountValue.isValid)
      ) {
        // Only show invalid text if we validate AND validation fails
        return false;
      }
      return null;
    },
    // For red outline for currency
    isRequestedAmountCurrencyValid() {
      if (this.isRequestedAmountEnabled.value) {
        // Only validate if enabled
        return this.requestedAmountCurrency.isValid;
      }
      return null;
    },
    // For red outline for amount
    isRequestedAmountValueValid() {
      if (this.isRequestedAmountEnabled.value) {
        // Only validate if enabled
        return this.requestedAmountValue.isValid;
      }
      return null;
    },
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
