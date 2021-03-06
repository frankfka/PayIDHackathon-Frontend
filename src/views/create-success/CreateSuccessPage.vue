<template>
  <div class="create-success-page">
    <PageWrapper>
      <div class="w-100">
        <!--Header with title-->
        <div class="section">
          <h1>Success!</h1>
          <p class="mt-1">Your payment page is now live.</p>
        </div>
        <!--Payment page URL section-->
        <div class="section">
          <h4>Your New Page</h4>
          <ReadOnlyTextField class="mt-3" :value="pageFullUrl"/>
        </div>
        <!--Badge Section-->
        <div class="section">
          <div class="d-inline-flex align-items-center">
            <h4>Share with a Badge</h4>
            <img :src="badgeUrl" alt="Badge image URL" class="mx-3"/>
          </div>
          <p class="mt-1">We use <a href="https://shields.io/" target="_blank">shields.io</a>
            to create shareable badges.</p>
          <ReadOnlyTextField class="mt-3" :value="badgeUrl"/>
        </div>
        <!--Social Section-->
        <div class="section">
          <h4>Share on Social Media</h4>
          <BRow class="mt-3" no-gutters>
            <SocialShareButton
              v-for="network in socialSharingNetworks"
              v-bind:key="network"
              :network="network"
              :url="pageFullUrl"
              class="mr-3"
            />
          </BRow>
        </div>
        <!--Go to page button-->
        <div class="text-center section">
          <BaseButton
            label="Go to Your Page"
            :to="pagePath"
            outlined
          />
        </div>
      </div>
    </PageWrapper>
  </div>
</template>

<script>
import {
  SUCCESS_PATH_PAGE_ID_KEY,
  PAGE_PATH_BASE,
  SUCCESS_PATH_PAY_ID_KEY,
} from '../../constants/routes';
import BaseButton from '../components/BaseButton.vue';
import SocialShareButton, { SUPPORTED_SOCIAL_NETWORKS } from '../components/SocialShareButton.vue';
import PageWrapper from '../components/PageWrapper.vue';
import ReadOnlyTextField from '../components/ReadOnlyTextField.vue';

export default {
  name: 'CreateSuccessPage',
  components: {
    ReadOnlyTextField,
    PageWrapper,
    SocialShareButton,
    BaseButton,
  },
  computed: {
    // Generated ID for new page, passed as a prop
    pageId() {
      return this.$route.query[SUCCESS_PATH_PAGE_ID_KEY];
    },
    // PayID for the new page, passed as a prop
    payIdForPage() {
      return this.$route.query[SUCCESS_PATH_PAY_ID_KEY];
    },
    // Relative path for router
    pagePath() {
      return `${PAGE_PATH_BASE}/${this.pageId}`;
    },
    // Full URL to the page
    pageFullUrl() {
      return `${window.location.origin}${this.pagePath}`;
    },
    // Badge URL
    badgeUrl() {
      return `https://img.shields.io/static/v1?label=PayID&message=${encodeURIComponent(this.payIdForPage)}&color=266bcc&labelColor=cd4c04`;
    },
    // All social sharing networks
    socialSharingNetworks() {
      return SUPPORTED_SOCIAL_NETWORKS;
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  margin: ($spacer * 2) auto;
}
</style>
