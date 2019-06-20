<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 style="height: 76px;">
        <v-form ref="nameform">
          <v-text-field
            ref="namefield"
            v-model="title"
            label="apo-color name"
            @blur="handleBlur()"
            :rules="[rules.hasName]"
            @keyup.enter="submitColor()"
          ></v-text-field>
        </v-form>
      </v-flex>
      <v-flex xs8>
        <v-form ref="hexform">
          <v-text-field
            v-if="isHexColor"
            v-model="input"
            label="Comparator"
            :rules="[rules.validHex, rules.mustBeFullHex, rules.counter]"
            prepend-icon="mdi-pound"
            :color="isComplete ? 'success' : 'primary'"
            @input="checkColor()"
            @focus="checkColor()"
            @blur="handleBlur()"
            @keyup.enter="submitColor()"
            :hint="getHintLabel"
            maxlength="6"
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
    </v-layout>
    <apo-sheet :list="apoColors"/>
  </v-container>
</template>

<script>
import aposheet from "@/components/aposheet";

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
    apoColors: [
      {
        title: "apo-color-icon-main",
        delta: "+130"
      }
    ],
    isCalc: false,
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 7 || "Max 6 characters",
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
  },
  computed: {
    app() {
      return this.$root.$children[0];
    },
    isHexColor() {
      return true;
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
    }
  },
  methods: {
    submitAll() {
      this.apoColors.push({
        title: `${
          !/apo\-color\-/.test(this.title) ? "apo-color-" : ""
        }${this.title.split(" ").join("-")}`,
        delta: this.output
      });
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
      this.$refs.nameform.validate();
      this.$refs.hexform.validate();
      if (this.hasName && this.isComplete) {
        this.submitAll();
        this.clear();
        this.$refs.namefield.focus();
      }
    },
    clear() {
      this.output = "";
      this.input = "";
      this.title = "";
      this.$refs.hexform.resetValidation();
      this.$refs.nameform.resetValidation();
      this.isCalc = false;
    },
    checkColor() {
      if (!this.isComplete) {
        this.isCalc = true;
        this.output = "";
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
}
</style>
