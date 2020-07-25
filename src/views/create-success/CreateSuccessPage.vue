<template>
  <div class="create-success-page">
    <h1>Create Success!</h1>
    <p>{{ pageId }}</p>
    <!--Badges-->
    <div class="create-success-badges-section">
      <h3>Share with Badges</h3>
      <p>We use <a href="https://shields.io/" target="_blank">shields.io</a>
        to create shareable badges.</p>
      <BRow no-gutters>
        <!--TODO-->
        <a href="#">
          <img src="https://img.shields.io/badge/PayID-my%24pay.id-1877f2"/>
        </a>
      </BRow>
    </div>
    <!--Social Sharing-->
    <div class="create-success-social-section">
      <h3>Share on Social Media</h3>
      <BRow no-gutters>
        <SocialShareButton
          network="facebook"
          :url="pageFullUrl"
          :label="'Share on Facebook'"
        />
      </BRow>
    </div>
    <BaseButton
      label="Go to Your Page"
      :to="pagePath"
    />
  </div>
</template>

<script>
import { SUCCESS_PATH_QUERY_KEY, PAGE_PATH_BASE } from '../../constants/routes';
import BaseButton from '../components/BaseButton.vue';
import SocialShareButton from '../components/SocialShareButton.vue';

export default {
  name: 'CreateSuccessPage',
  components: { SocialShareButton, BaseButton },
  computed: {
    pageId() {
      return this.$route.query[SUCCESS_PATH_QUERY_KEY];
    },
    pagePath() {
      return `${PAGE_PATH_BASE}/${this.pageId}`;
    },
    pageFullUrl() {
      return `${window.location.origin}${this.pagePath}`;
    },
  },
};
</script>

<style scoped>

</style>
