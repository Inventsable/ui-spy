import getAppTheme from "./utils/getAppTheme";
import getAppName from "./utils/getAppName";
import getPanelBG from "./utils/getPanelBG";
import rgbToHex from "./utils/rgbToHex";
import hexToRGB from "./utils/hexToRGB";
import getColorFromDeltaOffset from "./utils/getColorFromDeltaOffset";

import ILSTdarkest from "./stylesheets/ILST/darkest.json";
import ILSTdark from "./stylesheets/ILST/dark.json";
import ILSTlight from "./stylesheets/ILST/light.json";
import ILSTlightest from "./stylesheets/ILST/lightest.json";
import AEFTgradient from "./stylesheets/AEFT/gradient.json";

let themes = {};

let starlette;
export default (starlette = {
  themes: {},
  currentTheme: [],
  loadThemes() {
    themes["ILSTdarkest"] = ILSTdarkest;
    themes["ILSTdark"] = ILSTdark;
    themes["ILSTlight"] = ILSTlight;
    themes["ILSTlightest"] = ILSTlightest;
    themes["AEFTgradient"] = AEFTgradient;
    console.log(themes);
  },
  init() {
    this.loadThemes();
    window.__adobe_cep__.addEventListener(
      "com.adobe.csxs.events.ThemeColorChanged",
      this.appThemeChanged
    );
    this.appThemeChanged();
  },
  appThemeChanged() {
    this.currentTheme = [];
    let panelBG = getPanelBG();
    let currentTheme = themes[getAppName() + getAppTheme()];
    currentTheme.forEach(cssVar => {
      if (cssVar.delta || cssVar.delta <= 0) {
        if (+cssVar.delta + panelBG[0] >= 255) setCSS(cssVar.title, "#fff");
        else
          setCSS(
            cssVar.title,
            `${getColorFromDeltaOffset(panelBG, cssVar.delta)}`
          );
      } else if (cssVar.hex) {
        setCSS(cssVar.title, cssVar.hex);
      } else if (cssVar.value) {
        setCSS(cssVar.title, cssVar.value);
      }
    });
  },
  getCSS(prop) {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
  },
  setCSS(prop, data) {
    document.documentElement.style.setProperty(
      `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
      data
    );
  },
  getValue(item) {
    if (item.delta || item.delta <= 0) {
      if (+item.delta + getPanelBG()[0] >= 255) return "#ffffff";
      else return getColorFromDeltaOffset(getPanelBG(), item.delta);
    } else if (item.hex) {
      return item.hex;
    } else if (item.value) {
      return item.value;
    }
  },
  buildTableForApp(appName) {
    // let appName = getAppName();
    let mirror = [];
    if (appName == "ILST") {
      themes.ILSTdark.reverse().forEach((item, i) => {
        let darkest = this.getValue(item);
        let dark = this.getValue(
          themes.ILSTdark.find(entry => {
            return entry.title == item.title;
          })
        );
        let light = this.getValue(
          themes.ILSTlight.find(entry => {
            return entry.title == item.title;
          })
        );
        let lightest = this.getValue(
          themes.ILSTlightest.find(entry => {
            return entry.title == item.title;
          })
        );
        let line;
        if (item.hex || item.delta) {
          line = `| ${
            item.title
          } | ![${darkest}](https://placehold.it/15/${darkest.replace(
            "#",
            ""
          )}/ffffff?text=+) \`${darkest}\`  | ![${dark}](https://placehold.it/15/${dark.replace(
            "#",
            ""
          )}/ffffff?text=+) \`${dark}\`  | ![${light}](https://placehold.it/15/${light.replace(
            "#",
            ""
          )}/ffffff?text=+) \`${light}\`  | ![${lightest}](https://placehold.it/15/${lightest.replace(
            "#",
            ""
          )}/ffffff?text=+) \`${lightest}\` |`;
          console.log(line);
        }
      });
    } else {
      console.log("Nothing");
    }
  },
  // GLOBAL
  showValues() {
    let currentTheme = themes[getAppName() + getAppTheme()];
    currentTheme.forEach(cssVar => {
      if (cssVar.delta || cssVar.delta <= 0) {
        console.log(
          `--${cssVar.title} => ${getColorFromDeltaOffset(
            panelBG,
            cssVar.delta
          )}`
        );
      } else if (cssVar.hex) {
        console.log(`--${cssVar.title} => ${cssVar.hex}`);
      } else if (cssVar.value) {
        console.log(`--${cssVar.title} => ${cssVar.value}`);
      }
    });
  },
  varList: [
    "color-bg",
    "color-default",
    "color-text-label",
    "color-icon",
    "color-selection",
    "color-divider",

    "color-btn-default",
    "color-btn-hover",
    "color-btn-border",
    "color-btn-primary",
    "color-btn-disabled",
    "color-btn-active",

    "color-btn-disabled-text",
    "color-btn-primary-text",
    "color-btn-pill-hover",
    "color-btn-pill-border",

    "color-btn-icon-active",
    "color-btn-icon-active-border",
    "color-btn-icon-hover",
    "color-btn-icon-hover-border",
    "color-btn-toolbar-active",
    "color-btn-toolbar-active-border",
    "color-btn-toolbar-hover",
    "color-btn-toolbar-hover-border",

    "color-input-idle-bg",
    "color-input-idle-border",
    "color-input-idle-text",
    "color-input-focus-bg",
    "color-input-focus-border",
    "color-input-focus-text",

    "color-dropdown-idle",
    "color-dropdown-active",
    "color-dropdown-hover",
    "color-dropdown-border",
    "color-dropdown-item-hover",
    "color-dropdown-item",
    "color-dropdown-item-selected",

    "color-checkbox-text",
    "color-checkbox-hover",
    "color-checkbox-disabled",

    "color-scrollbar",
    "color-scrollbar-arrow",
    "color-scrollbar-thumb",
    "color-scrollbar-thumb-hover",
    "width-scrollbar-trac",
    "radius-scrollbar-thum",

    "color-tooltip-border"
  ]
});

function getCSS(prop) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`${/^\-\-/.test(prop) ? prop : "--" + prop}`);
}
function setCSS(prop, data) {
  document.documentElement.style.setProperty(
    `${/^\-\-/.test(prop) ? prop : "--" + prop}`,
    data
  );
}
