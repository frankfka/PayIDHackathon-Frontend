<template>
  <div class="create-page">
    <PageWrapper>
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
    </PageWrapper>
  </div>
</template>

<script>
import CreatePageForm from './CreatePageForm.vue';
import { createPage } from '../../services/api';
import {
  SUCCESS_PATH_NAME,
  SUCCESS_PATH_PAGE_ID_KEY,
  SUCCESS_PATH_PAY_ID_KEY,
} from '../../constants/routes';
import PageWrapper from '../components/PageWrapper.vue';

export default {
  components: { PageWrapper, CreatePageForm },
  data() {
    return {
      isSubmitting: false,
      showSubmitError: false,
    };
  },
  methods: {
    onFormSubmit(data) {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      createPage(data)
        .then((newPageId) => {
          // Push to success page if creation is successful
          this.isSubmitting = false;
          const routerParams = {};
          routerParams[SUCCESS_PATH_PAGE_ID_KEY] = newPageId;
          routerParams[SUCCESS_PATH_PAY_ID_KEY] = data.payId;
          this.$router.push({
            name: SUCCESS_PATH_NAME,
            query: routerParams,
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
</style>
