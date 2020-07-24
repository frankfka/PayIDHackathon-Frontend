<template>
  <div class="about">
    <h1>Create a Payment Page</h1>
    <CreatePageForm @submit="onFormSubmit"/>
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
  methods: {
    onFormSubmit(data) {
      // TODO: Call service
      console.log(data);
    },
  },
};
</script>
