<template>
  <div class="home">
    <SectionWrapper>
      <BRow no-gutters>
        <BCol>
          <h1>Get Paid Easily in Crypto.</h1>
          <h5>
            Easily share your cryptocurrency payment information with a unique payment profile.
          </h5>
          <RouterLink to="/create">
            <BaseButton label="Create Yours"/>
          </RouterLink>
        </BCol>
      </BRow>
    </SectionWrapper>
  </div>
</template>

<script>
import SectionWrapper from '../components/SectionWrapper.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'Home',
  components: {
    BaseButton,
    SectionWrapper,
  },
};
</script>
