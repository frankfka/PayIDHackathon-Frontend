<template>
  <div class="home-page">
    <!--Splash Section-->
    <PageWrapper class="header">
      <BRow no-gutters align-v="center" align-h="between">
        <!--Left text column-->
        <BCol md="8" lg="6">
          <h1 class="mb-2 font-weight-bold header-title">Get Paid Easily in Crypto.</h1>
          <h5 class="header-subtitle">
            Easily share your <a href="https://payid.org/" target="_blank">PayID</a> cryptocurrency
            payment information with a unique payment profile.
          </h5>
          <BaseButton label="Create Yours" :to="createPath" class="mt-3" outlined size="lg"/>
        </BCol>
        <!--Right image column-->
        <BCol md="4" lg="4">
          <img src="@/assets/images/home-splash.svg" alt="Header image" class="img-fluid"/>
        </BCol>
      </BRow>
    </PageWrapper>
    <PageWrapper class="how-it-works align-content-center">
      <div class="text-center">
        <h2 class="section-title mb-5">How it Works</h2>
        <BRow>
          <BCol>
            <h4 class="section-minor-title">Create a Page</h4>
            <p>It takes less than a minute and no personal information is required.
              Simply enter your PayID and we'll take care of the rest.
              Optionally add a name, message, and a requested amount.</p>
          </BCol>
          <BCol>
            <h4 class="section-minor-title">Share Your Link</h4>
            <p>Taking payment for an order? Splitting the bill with a friend? Share your profile
              with whomever. We also hook you up with some nice badges courtesy of
              <a href="https://shields.io/" target="_blank">shields.io</a>.</p>
          </BCol>
          <BCol>
            <h4 class="section-minor-title">Get Paid Easily</h4>
            <p>Payees can easily see your cryptocurrency payment profile that we retrieve
             from your PayID. We make it easy to copy-and-paste addresses and scan QR codes,
             making payments a breeze.</p>
          </BCol>
        </BRow>
        <BaseButton label="Get Started Now" :to="createPath" class="mt-5" outlined/>
      </div>
    </PageWrapper>
  </div>
</template>

<script>
import PageWrapper from '../components/PageWrapper.vue';
import { CREATE_PATH } from '../../constants/routes';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'HomePage',
  components: {
    BaseButton,
    PageWrapper,
  },
  computed: {
    createPath() {
      return CREATE_PATH;
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    min-height: $min-page-vh;
  }
  .header-title {
    font-size: $h1-font-size * 1.2;
  }
  .header-subtitle {
    font-size: $h5-font-size * 1.2;
    color: $color-text-secondary;
  }
  .section-title {
    font-weight: bold;
  }
  .section-minor-title {
    font-size: $h4-font-size * 1;
    margin-bottom: $spacer;
  }
  .how-it-works {
    padding-bottom: 30vh; // Extra padding for last section
  }
  .col {
    // Increase horizontal padding
    padding-left: 30px;
    padding-right: 30px;
  }
  p {
    color: $color-text-secondary;
  }
</style>
