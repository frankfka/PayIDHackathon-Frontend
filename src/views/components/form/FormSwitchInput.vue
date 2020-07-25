<template>
  <BFormCheckbox switch v-model="localValue">
    <slot></slot>
  </BFormCheckbox>
</template>

<script>
export default {
  name: 'FormSwitchInput',
  props: {
    value: {
      type: Boolean,
      required: true,
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
