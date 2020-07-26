<template>
  <BButton
    :class="outlined ? 'base-button-outline' : 'base-button-fill'"
    :size="size"
    :type="type"
    :href="href"
    :to="to"
    :disabled="disabled"
  >
    <div class="d-flex align-content-center align-items-center">
      {{ label }}
      <!--Loading animation-->
      <BaseSpinner small v-if="loading" class="ml-2"/>
    </div>
  </BButton>
</template>

<script>
import BaseSpinner from './BaseSpinner.vue';

export default {
  name: 'BaseButton',
  components: { BaseSpinner },
  props: {
    label: String,
    size: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    // Native HTML functionalities for buttons
    type: String, // ex. submit for forms
    href: String, // For links
    to: String, // For Vue Router
  },
};
</script>

<style scoped lang="scss">
  $border-style: 2px solid;

  // Filled
  .base-button-fill, .base-button-fill:hover, .base-button-fill:active, .base-button-fill:visited {
    background-color: $color-primary !important;
    border: $color-primary $border-style !important;
    cursor: pointer;
  }

  .base-button-fill {
    color: $color-text-on-primary !important;
    &:hover {
      border: $color-primary-dark $border-style !important;
      background-color: $color-primary-dark !important;
    }
  }

  // Outline
  .base-button-outline, .base-button-outline:hover,
  .base-button-outline:active, .base-button-outline:visited {
    background-color: transparent !important;
    border: $color-primary $border-style !important;
  }

  .base-button-outline {
    color: $color-primary !important;
    &:hover {
      background-color: $color-primary-dark !important;
      border: $color-primary-dark $border-style !important;
      color: $color-text-on-primary !important;
    }
  }

</style>
