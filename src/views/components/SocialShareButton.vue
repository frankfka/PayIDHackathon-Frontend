<template>
<!--TODO: Fill these in-->
<ShareNetwork
  class="social-share-button"
  :network="network"
  :url="url"
  title="My Payment Page"
  description=""
  :style="{backgroundColor: color}"
>
  <FontAwesomeIcon :icon="icon" class="social-share-button-brand-icon"/>
  <span class="social-share-button-label">{{ label }}</span>
</ShareNetwork>
</template>

<script>
// TODO: Need to finish
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSocialSharing from 'vue-social-sharing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebookF,
);
Vue.use(VueSocialSharing);

export default {
  name: 'SocialShareButton',
  props: {
    network: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Share',
    },
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    icon() {
      return faFacebookF;
    },
    color() {
      return '#1877f2';
    },
  },
};
</script>

<style scoped lang="scss">
.social-share-button {
  cursor: pointer;
  border: 1px solid gray;
  padding: 0.2em;
}
.social-share-button-label {
  color: white;
}
.social-share-button-brand-icon {
  color: white;
  margin-right: 0.5em;
}
</style>
