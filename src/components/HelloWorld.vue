<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs6 style="height: 76px;">
        <v-form ref="nameform">
          <v-text-field
            ref="namefield"
            v-model="title"
            label="CSS var name"
            @blur="handleBlur()"
            :rules="[rules.hasName]"
            @keyup.enter="submitColor()"
          ></v-text-field>
        </v-form>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-checkbox color="primary" :disabled="isValue" v-model="isColor" label="Color"></v-checkbox>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-checkbox color="primary" v-model="isValue" label="Value"></v-checkbox>
      </v-flex>
      <v-flex xs5>
        <v-form ref="hexform">
          <v-text-field
            v-if="!isValue"
            v-model="input"
            label="Comparator"
            :rules="[rules.validHex, rules.mustBeFullHex, rules.counter]"
            prepend-icon="mdi-pound"
            color="primary"
            @input="checkColor"
            @focus="checkColor"
            @blur="handleBlur()"
            @keyup.shift.space="grabColor"
            @keyup.enter="submitColor()"
            :hint="getHintLabel"
            maxlength="6"
            spellcheck="false"
            counter
          ></v-text-field>
          <v-text-field
            v-else
            v-model="inputVal"
            label="Value"
            :rules="[rules.lowCount]"
            prepend-icon="mdi-pound"
            :color="isComplete ? 'success' : 'primary'"
            @keyup.enter="submitColor()"
            spellcheck="false"
            counter
          ></v-text-field>
        </v-form>
      </v-flex>
      <v-flex xs2 class="input-arrow">
        <v-icon>mdi-arrow-right</v-icon>
      </v-flex>
      <v-flex xs2>
        <v-text-field v-model="output" persistent-hint hint="Offset" :loading="isCalc"></v-text-field>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-checkbox color="primary" v-model="override" :disabled="isValue" label="Hex"></v-checkbox>
      </v-flex>
    </v-layout>
    <apo-sheet :list="apoColors" />
  </v-container>
</template>

<script>
import aposheet from "@/components/aposheet";
// import starlette from "@/starlette";
import starlette from 'starlette'

import getPanelBG from "@/utils/color/getPanelBG";
import rgbToHex from "@/utils/color/rgbToHex.js";
import hexToRGB from "@/utils/color/hexToRGB.js";

export default {
  components: {
    "apo-sheet": aposheet
  },
  data: () => ({
    title: "",
    input: "",
    output: "",
    override: false,
    isValue: false,
    inputVal: "",
    isColor: true,
    apoColors: [],
    isCalc: false,
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 7 || "Max 6 characters",
      lowCount: value => value.length >= 1 || "Must provide a value",
      hasName: value => value.length > 0 || "Must have name",
      mustBeFullHex: value => value.length == 6 || "Must be 6 characters",
      validHex: value => {
        const pattern = /^[a-fA-F0-9]{0,6}$/;
        return pattern.test(value) || "Invalid hex color";
      }
    }
  }),
  mounted() {
    this.app.main = this;
    if (this.storage.getItem(`${this.theme}`))
      this.apoColors = JSON.parse(this.storage.getItem(`${this.theme}`));

    console.log(starlette);
    starlette.init();
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    root() {
      return decodeURI(window.__adobe_cep__.getSystemPath("extension")).replace(
        /file\:\/{1,}/,
        ""
      );
    },
    appName() {
      return JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
    },
    isHexColor() {
      return true;
    },
    storage() {
      return window.localStorage;
    },
    isComplete() {
      return this.input.length == 6;
    },
    hasName() {
      return this.title.length;
    },
    getHintLabel() {
      let bgColor = JSON.parse(window.__adobe_cep__.getHostEnvironment())
        .appSkinInfo.panelBackgroundColor.color;
      return `Delta from ${rgbToHex(getPanelBG())}`;
    },
    theme() {
      return this.app.stylizer ? this.app.stylizer.theme : null;
    }
  },
  watch: {
    apoColors(list) {
      this.storage.setItem(`${this.theme}`, JSON.stringify(list));
    },
    isValue(state) {
      if (state) {
        this.isColor = false;
      } else {
        this.isColor = true;
      }
    }
  },
  methods: {
    writeColors() {
      let path = `${this.root}/src/starlette/stylesheets/${this.appName}/${this.theme}.json`;
      if (this.apoColors.length) {
        let file = window.cep.fs.writeFile(
          path,
          JSON.stringify(this.apoColors)
        );

        if (file.err) {
          console.log(file.err);
        } else {
          console.log(`File written successfully`);
        }
      } else {
        console.log("No colors to write");
      }
    },
    grabColor() {
      this.app.csInterface.evalScript(`getActiveHexColor()`, col => {
        this.input = rgbToHex(JSON.parse(col)).substring(1, 7);
        this.checkColor();
      });
    },
    submitAll() {
      let newcolor = {
        title: `${
          !/color\-/.test(this.title) ? (this.isColor ? "color-" : "") : ""
        }${this.title.split(" ").join("-")}`
      };
      if (this.isValue) newcolor["value"] = this.inputVal;
      else if (!this.override) newcolor["delta"] = this.output;
      else newcolor["hex"] = `#${this.input}`;
      this.apoColors.unshift(newcolor);
    },
    handleBlur() {
      this.isCalc = false;
      this.$refs.hexform.resetValidation();
      this.$refs.nameform.resetValidation();
    },
    compareRGBsForDelta(a, b) {
      let comparison = a.map((col, i) => {
        return (col - b[i]) * -1;
      });
      let alpha = 0;
      comparison.forEach(res => {
        alpha += res;
      });
      return alpha > 0
        ? `+${Math.floor(alpha / a.length)}`
        : Math.floor(alpha / a.length);
    },
    submitColor() {
      if (!this.isValue) {
        this.$refs.nameform.validate();
        this.$refs.hexform.validate();
        if (this.hasName && this.isComplete) {
          this.submitAll();
          this.clear();
          this.$refs.namefield.focus();
        }
      } else {
        this.submitAll();
        this.clear();
        this.$refs.namefield.focus();
      }
    },
    clear() {
      this.output = "";
      this.input = "";
      this.inputVal = "";
      this.title = "";
      this.isColor = true;
      this.override = false;
      this.$refs.hexform.resetValidation();
      this.$refs.nameform.resetValidation();
      this.isCalc = false;
    },
    checkColor(evt) {
      if (!this.isComplete) {
        this.isCalc = true;
        this.output = "";
        // this.input = /[^a-fA-F0-9]$/.test(this.input)
        //   ? this.input
        //       .split("")
        //       .filter(char => {
        //         return /[a-fA-F0-9]/.test(char);
        //       })
        //       .join("")
        //   : this.input;
        return null;
      } else {
        console.log(this.input.length);
        this.isCalc = false;
        this.output = this.compareRGBsForDelta(
          getPanelBG(),
          hexToRGB(this.input)
        );
      }
    }
  }
};
</script>

<style>
.theme--dark.v-input:not(.v-input--is-disabled) input,
.theme--dark.v-input:not(.v-input--is-disabled) textarea {
  color: var(--color-input-text);
}

.input-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme--dark.v-label {
  color: var(--color-input-label);
  /* color: red; */
}
</style>
