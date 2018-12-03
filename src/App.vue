<template>
  <md-app id="app" md-mode="fixed" md-waterfall>
    <md-app-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <span class="md-title countdowner-title">{{toolbarTitle}}</span>
        <div class="md-toolbar-section-end">
        </div>
      </div>
    </md-app-toolbar>
    <md-app-drawer class="app-drawer" md-permanent="full">
      <md-toolbar class="md-transparent nav-title" md-elevation="0">{{appName}}</md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <router-link class="md-list-item-text" to="/">Your countdowns</router-link>
        </md-list-item>
        <md-list-item>
          <md-icon>info</md-icon>
          <router-link class="md-list-item-text" to="/about">About Countdowner</router-link>
        </md-list-item>
      </md-list>
    </md-app-drawer>
    <md-app-content>
      <router-view></router-view>
      <md-button class="md-fab md-fab-bottom-right">
        <i class="material-icons">create</i>
      </md-button>
    </md-app-content>
  </md-app>
</template>

<script>
import { ROUTE_HOME, ROUTE_ABOUT } from "@/router";
import { APP_INFO } from "@/scripts/meta";

export default {
  name: "countdowner-app",
  data() {
    return {
      appName: APP_INFO.appName, 
    };
  },
  computed: {
    toolbarTitle() {
      console.log(this.$router);
      switch (this.$router.currentRoute.name) {
        case ROUTE_HOME:
          return "Your countdowns";
        case ROUTE_ABOUT:
          return `About ${APP_INFO.appName}`;
        default:
          return APP_INFO.appName;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

.md-app-content {
  background: #E0E0E0;
}

@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: md-get-palette-color(gray, 600),
  accent: md-get-palette-color(green, A100)
));

@import "~vue-material/dist/theme/all";

.countdowner-title {
  font-family: 'Raleway';
  font-weight: bold;
}

// TODO: Responsive design
.app-drawer {
  width: 320px;
  max-width: calc(100vw - 56px);
}

.nav-title {
  font-family: 'Raleway', sans-serif;
}
</style>
