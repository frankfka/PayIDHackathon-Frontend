<template>
<PageWrapper>
  <ErrorView message="This page doesn't exist." class="page"/>
</PageWrapper>
</template>

<script>
import ErrorView from '../components/ErrorView.vue';
import PageWrapper from '../components/PageWrapper.vue';

export default {
  name: 'PageNotFoundPage',
  components: { PageWrapper, ErrorView },
};
</script>

<style scoped>

</style>
