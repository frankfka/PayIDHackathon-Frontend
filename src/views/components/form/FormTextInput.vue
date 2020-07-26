<template>
  <BFormGroup
    :label="label"
    :description="description"
    :valid-feedback="validFeedback"
    :invalid-feedback="invalidFeedback"
    :state="isValid"
  >
    <BFormInput
      :placeholder="placeholder"
      :state="isValid"
      :type="type"
      v-model="localValue"
      :disabled="disabled"
      :readonly="readonly"
    />
  </BFormGroup>
</template>

<script>
export default {
  name: 'FormTextInput',
  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    validFeedback: {
      type: String,
      default: '',
    },
    invalidFeedback: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() { return this.value; },
      set(newVal) { this.$emit('input', newVal); },
    },
  },
};
</script>

<style scoped lang="scss">
$input-placeholder-color: $color-primary;
</style>
