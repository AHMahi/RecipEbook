<template lang="html">
  <div class="font-source-sans-pro">
    <MainHeaderComponent @loggedOut="$emit('loggedOut')" />
    <router-view v-bind="{ displayName }"></router-view>
    <MainFooterComponent />
  </div>
</template>
<script>
import MainHeaderComponent from "../headers/MainHeaderComponent";
import MainFooterComponent from "../footers/MainFooterComponent";
export default {
  components: { MainHeaderComponent, MainFooterComponent },
  props: {
    displayName: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
