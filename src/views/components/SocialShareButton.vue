<template>
<ShareNetwork
  class="social-share-button"
  :network="network"
  :url="url"
  title="My PayID Payment Page"
  :style="{backgroundColor: color}"
>
  <FontAwesomeIcon :icon="icon" class="m-2"/>
</ShareNetwork>
</template>

<script>
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSocialSharing from 'vue-social-sharing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF, faTwitter, faRedditAlien, faLine, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebookF, faTwitter, faRedditAlien, faLine, faWhatsapp,
);
Vue.use(VueSocialSharing);

function toAttrs(icon, color) {
  return {
    icon, color,
  };
}
const NETWORK_TO_ATTRS = {
  facebook: toAttrs(faFacebookF, '#3b5998'),
  twitter: toAttrs(faTwitter, '#1DA1F2'),
  reddit: toAttrs(faRedditAlien, '#FF5700'),
  line: toAttrs(faLine, '#00b900'),
  whatsapp: toAttrs(faWhatsapp, '#075E54'),
};
export const SUPPORTED_SOCIAL_NETWORKS = Object.keys(NETWORK_TO_ATTRS);

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
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    icon() {
      return NETWORK_TO_ATTRS[this.network].icon;
    },
    color() {
      return NETWORK_TO_ATTRS[this.network].color;
    },
  },
};
</script>

<style scoped lang="scss">
.social-share-button {
  cursor: pointer;
}
.social-share-button-brand-icon {
  color: white;
}
</style>
