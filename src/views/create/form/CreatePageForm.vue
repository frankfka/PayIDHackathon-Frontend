<template>
<div>
  <BForm @submit="onSubmit">
    <!--PayID Input-->
    <FormTextInput
      v-model="payId.value"
      v-bind="payId"
    />
    <FormSwitchInput v-model="isRequestedAmountEnabled.value">
      Request an Amount
    </FormSwitchInput>
    <BaseButton label="Submit" type="submit"/>
  </BForm>
  <div>
    <p>
      {{ payId }}
    </p>
  </div>
</div>
</template>

<script>
import FormTextInput from '../../components/FormTextInput.vue';
import * as inputUtils from './CreatePageInputUtils';
import BaseButton from '../../components/BaseButton.vue';
import FormSwitchInput from '../../components/FormSwitchInput.vue';

// Validate inputs and mutate state with correct helper messages
function validateForm(formState) {
  console.log('Validation');
  console.log(formState.payId);
  const mutableFormState = formState; // ESLint complains if we modify the param directly
  let isValid = true;
  // Validate PayID
  if (!inputUtils.validatePayIDInput(formState.payId.value)) {
    mutableFormState.payId.isValid = false;
    isValid = false;
  } else {
    mutableFormState.payId.isValid = null; // Only show invalid fields
  }
  // Validate requested amount
  if (formState.isRequestedAmountEnabled.value) {
    console.log('Check requested amount');
  }
  return isValid;
}

export default {
  name: 'CreatePageForm',
  components: { FormSwitchInput, BaseButton, FormTextInput },
  data() {
    return {
      payId: inputUtils.getPayIDInputInitialState(),
      name: inputUtils.getNameInputInitialState(),
      customMessage: inputUtils.getCustomMessageInputInitialState(),
      isRequestedAmountEnabled: inputUtils.getRequestedAmountEnabledInputInitialState(),
      requestedAmountValue: inputUtils.getRequestedAmountValueInputInitialState(),
      requestedAmountCurrencyCode: inputUtils.getRequestedAmountCurrencyInputInitialState(),
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      // TODO: Validation
      const isFormValid = validateForm(this.$data);
      console.log(isFormValid);
    },
  },
};
</script>

<style scoped>

</style>
