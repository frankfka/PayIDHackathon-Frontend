<template>
  <div class="create-success-page">
    <h1>Create Success!</h1>
    <p>{{ pageId }}</p>
    <BaseButton
      label="Go to Your Page"
      :to="pagePath"
    />
  </div>
</template>

<script>
import { SUCCESS_PATH_QUERY_KEY, PAGE_PATH_BASE } from '../../constants/routes';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'CreateSuccessPage',
  components: { BaseButton },
  computed: {
    pageId() {
      return this.$route.query[SUCCESS_PATH_QUERY_KEY];
    },
    pagePath() {
      return `${PAGE_PATH_BASE}/${this.pageId}`;
    },
  },
};
</script>

<style scoped>

</style>
