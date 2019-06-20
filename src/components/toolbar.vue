<template>
  <div>
    <v-toolbar app card dark class="darkToolbar">
      <appicon class="mr-3"/>
      <router-link v-for="(btn, i) in routebtns" :key="i" :to="btn.route">
        <v-btn icon>
          <v-icon :style="getToolbarIconStyle(btn)">{{btn.icon}}</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-title class="toolbar-title font-weight-light">{{theme ? theme : ''}}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
import appicon from "./appicon";

export default {
  name: "navbar",
  components: {
    appicon
  },
  data: () => ({
    routebtns: [
      {
        route: "/",
        icon: "search"
      },
      {
        route: "/preview",
        icon: "mdi-eye"
      }
    ]
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    theme() {
      return this.app.stylizer ? this.app.stylizer.theme : null;
    }
  },
  mounted() {
    const toolbar_content = document.querySelector(".v-toolbar__content");
    toolbar_content.style.height = `40px`;
    console.log(this.$route.path);
  },
  methods: {
    goToLink(link) {
      cep.util.openURLInDefaultBrowser(link);
    },
    getToolbarIconStyle(btn) {
      let str = `color: var(--apo-color-${
        this.$route.path == btn.route ? "selection" : "disabled"
      })`;
      return str;
    }
  }
};
</script>

<style>
.darkToolbar,
.theme--dark.v-system-bar,
.theme--dark.v-toolbar {
  position: absolute;
  top: 0px;
  background-color: var(--apo-color-input-idle);
  cursor: default;
}

.toolbar-title {
  color: var(--apo-color-text-default);
  user-select: none;
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
