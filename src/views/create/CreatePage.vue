<template>
  <div class="create-page">
    <SectionWrapper>
      <div class="w-100">
        <!--Header with title-->
        <div class="header">
          <h1>Create a Payment Page</h1>
          <p class="mt-1">Create a unique payment page with your
            <a href="https://payid.org/" target="_blank">PayID</a>.</p>
        </div>
        <!--Error alert-->
        <BAlert variant="danger" dismissible fade v-model="showSubmitError" class="my-3">
          Something went wrong. Please try again.
        </BAlert>
        <!--Form-->
        <CreatePageForm
          class="my-5"
          @submit="onFormSubmit"
          :is-submitting="isSubmitting"
        />
      </div>
    </SectionWrapper>
  </div>
</template>

<script>
import CreatePageForm from './CreatePageForm.vue';
import { createPage } from '../../services/api';
import { SUCCESS_PATH_NAME, SUCCESS_PATH_QUERY_KEY } from '../../constants/routes';
import SectionWrapper from '../components/SectionWrapper.vue';

export default {
  components: { SectionWrapper, CreatePageForm },
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

<style lang="scss" scoped>
.create-page {
  min-height: $min-page-vh;
}
</style>
