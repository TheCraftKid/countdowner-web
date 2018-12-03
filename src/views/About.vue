<template>
  <div class="about">
    <md-card class="app-info-card">
      <div class="version">{{appName}} v{{version}}</div>
    </md-card>
  </div>
</template>

<script>
import { APP_INFO } from "@/scripts/meta";

export default {
  data() {
    return {
      ...APP_INFO,
    };
  },
};
</script>

<style lang="scss">
.app-info-card {
  padding: 16px;
}
</style>
