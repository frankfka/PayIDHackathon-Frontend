<template>
  <div class="home-page">
    <SectionWrapper>
      <BRow no-gutters>
        <BCol>
          <h1>Get Paid Easily in Crypto.</h1>
          <h5>
            Easily share your cryptocurrency payment information with a unique payment profile.
          </h5>
          <BaseButton label="Create Yours" :to="createPath"/>
        </BCol>
      </BRow>
    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '../components/SectionWrapper.vue';
import { CREATE_PATH } from '../../constants/routes';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'HomePage',
  components: {
    BaseButton,
    SectionWrapper,
  },
  computed: {
    createPath() {
      return CREATE_PATH;
    },
  },
};
</script>
