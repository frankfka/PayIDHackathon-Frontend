<template>
<BFormSelect
  v-model="localValue"
  :state="isValid"
  :options="options"
  :disabled="disabled"
/>
</template>

<script>
export default {
  name: 'FormSelectInput',
  props: {
    value: {
      type: Object,
      default: null,
    },
    options: {
      type: Array,
      required: true,
      validator: (options) => options.every((option) => !!option.text),
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    disabled: {
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

<style scoped>

</style>
