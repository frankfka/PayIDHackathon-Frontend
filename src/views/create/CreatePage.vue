<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CreatePageForm/>
  </div>
</template>

<script>
import CreatePageForm from './form/CreatePageForm.vue';

export default {
  components: { CreatePageForm },
  data() {
    return {
      // TODO: Use these
      isSubmitting: false,
      submitError: null,
    };
  },
};
</script>
