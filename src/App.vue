<template>
  <v-app dark>
    <stylizer/>
    <identity/>
    <menus/>
    <version/>
    <toolbar/>
    <v-content :style="getContentStyle()">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import identity from "./components/main/identity.vue";
import toolbar from "./components/toolbar.vue";
import stylizer from "./components/main/stylizer.vue";
import menus from "./components/main/menus.vue";
import version from "./components/main/version.vue";

export default {
  name: "App",
  components: {
    toolbar,
    identity,
    stylizer,
    menus,
    version
  },
  computed: {
    storage() {
      return window.localStorage;
    }
  },
  data: () => ({
    csInterface: null,
    identity: null,
    stylizer: null,
    menus: null,
    main: null,
    isMounted: false
  }),
  mounted() {
    console.clear();
    this.csInterface = new CSInterface();
    this.csInterface.addEventListener("console", this.consoler);

    // Utility components are already mounted prior to this
    console.log(
      `${this.identity.extName} ${this.identity.extVersion} : ${
        this.identity.isDev ? "DEV" : "BUILD"
      }`
    );
    this.isMounted = true;

    this.loadUniversalScripts();

    // Vue Router must be manually initialized in CEP:
    this.$router.push({ name: "home" });
  },
  methods: {
    getContentStyle() {
      return `
        overflow: auto;
        margin-top: ${this.$route.name == "home" ? "40" : "0"}px;
        padding: 0px 0px 0px 0px;
        max-height: calc(100vh - 40px);
      `;
    },
    dispatchEvent(name, data) {
      var event = new CSEvent(name, "APPLICATION");
      event.data = data;
      this.csInterface.dispatchEvent(event);
    },
    loadScript(path) {
      this.csInterface.evalScript(`$.evalFile('${path}')`);
    },
    loadUniversalScripts() {
      // Preloads universal scripts and main host script file
      this.loadScript(`${this.identity.root}/src/host/universal/json2.jsx`);
      this.loadScript(`${this.identity.root}/src/host/universal/Console.jsx`);
      this.loadScript(
        `${this.identity.root}/src/host/${this.identity.appName}/host.jsx`
      );
    },
    consoler(msg) {
      // Catches all console.log() usage in .jsx files via CSEvent
      console.log(`${this.identity.appName}: ${msg.data}`);
    },
    getCSS(prop) {
      // Returns current value of CSS variable
      // prop == typeof String as name of variable, with or without leading dashes:
      // this.getCSS('color-bg') || this.getCSS('--scrollbar-width')
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
    },
    setCSS(prop, data) {
      // Sets value of CSS variable
      // prop == typeof String as name of variable, with or without leading dashes:
      // this.setCSS('color-bg', 'rgba(25,25,25,1)') || this.setCSS('--scrollbar-width', '20px')
      document.documentElement.style.setProperty(
        `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
        data
      );
    }
  }
};
</script>

<style>
#nav {
  padding: 10px;
  display: flex;
  justify-content: center;
  color: var(--color-text-default);
}

svg {
  width: 100%;
}

#nav a {
  padding: 0px 5px;
  font-weight: bold;
  color: var(--color-text-default);
}

#nav a.router-link-exact-active {
  color: white;
}

:root {
  height: 100vh;
  --toolbar-height: 40;
  --quad: cubic-bezier(0.48, 0.04, 0.52, 0.96);
  --quart: cubic-bezier(0.76, 0, 0.24, 1);
  --quint: cubic-bezier(0.84, 0, 0.16, 1);
}
</style>
