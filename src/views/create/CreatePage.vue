<template>
  <div class="create-page">
    <h1>Create a Payment Page</h1>
    <BAlert variant="danger" dismissible fade v-model="showSubmitError">
      Something went wrong. Please try again.
    </BAlert>
    <CreatePageForm
      @submit="onFormSubmit"
      :is-submitting="isSubmitting"
    />
  </div>
</template>

<script>
import CreatePageForm from './CreatePageForm.vue';
import { createPage } from '../../services/api';
import { SUCCESS_PATH_NAME, SUCCESS_PATH_QUERY_KEY } from '../../constants/routes';

export default {
  components: { CreatePageForm },
  data() {
    return {
      isSubmitting: false,
      showSubmitError: false,
    };
  },
  methods: {
    onFormSubmit(data) {
      if (this.isSubmitting) {
        console.log('Currently submitting, not resubmitting');
        return;
      }
      console.log('Submitting form');
      this.isSubmitting = true;
      createPage(data)
        .then((newPageId) => {
          // Push to success page if creation is successful
          console.log(newPageId);
          this.isSubmitting = false;
          const routerPushQuery = {};
          routerPushQuery[SUCCESS_PATH_QUERY_KEY] = newPageId;
          this.$router.push({
            name: SUCCESS_PATH_NAME,
            query: routerPushQuery,
          });
        })
        .catch((error) => {
          // Display error, allow retry
          console.error(error);
          this.isSubmitting = false;
          this.showSubmitError = true;
        });
    },
  },
};
</script>
