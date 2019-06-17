<template>
  <div>
    <div>
      <!-- https://vuetifyjs.com/en/components/toolbars#toolbar -->
      <v-toolbar app card dark class="darkToolbar">
        <appicon/>
        <v-spacer></v-spacer>
        <v-toolbar-title class="toolbar-title font-weight-light">{{theme ? theme : ''}}</v-toolbar-title>
      </v-toolbar>
    </div>
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
    buttons: [
      {
        icon: "mdi-vuetify",
        link: "https://vuetifyjs.com/en/components/toolbars#toolbar"
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
  },
  methods: {
    goToLink(link) {
      cep.util.openURLInDefaultBrowser(link);
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
</style>
