<template>
  <div class="appicon">
    <svg id="ICONS" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 31">
      <g v-if="isILST">
        <rect class="boxILST" x="1" y="1" width="31" height="29"></rect>
        <g>
          <path
            class="textILST"
            d="M12.67,7.45h2.16l5.11,15.09h-2l-2.63-8.43c-.54-1.69-1-3.34-1.51-5.09h-.09c-.47,1.75-.95,3.4-1.49,5.09L9.52,22.54h-2Zm-2.43,9h7v1.53h-7Z"
          ></path>
          <path
            class="textILST"
            d="M21.69,7.84a1.31,1.31,0,0,1,2.61,0,1.31,1.31,0,0,1-2.61,0ZM22,11.36h1.89V22.54H22Z"
          ></path>
        </g>
      </g>
      <g v-if="isAEFT">
        <rect class="boxAEFT" x="1" y="1" width="31" height="29"></rect>
        <g>
          <path
            class="textAEFT"
            d="M9.79,7.45H12l5.1,15.09H15L12.4,14.11c-.55-1.69-1-3.34-1.51-5.09h-.1c-.46,1.75-.95,3.4-1.49,5.09L6.64,22.54H4.69Zm-2.42,9h7v1.53H7.37Z"
          ></path>
          <path
            class="textAEFT"
            d="M18.33,17c0-3.63,2.45-5.88,5-5.88,2.86,0,4.47,2.05,4.47,5.25a6.29,6.29,0,0,1-.09,1.07H20.2c.14,2.37,1.58,3.91,3.71,3.91a4.88,4.88,0,0,0,2.79-.9l.67,1.25a6.57,6.57,0,0,1-3.69,1.15C20.7,22.81,18.33,20.64,18.33,17Zm7.81-.91c0-2.24-1-3.46-2.75-3.46-1.57,0-3,1.26-3.21,3.46Z"
          ></path>
        </g>
      </g>
      <g v-if="isPPRO">
        <rect class="boxPPRO" x="1" y="1" width="31" height="29"></rect>
        <path
          class="textPPRO"
          d="M8.22,7.45h4.31c3.38,0,5.66,1.13,5.66,4.44s-2.27,4.66-5.57,4.66H10.14v6H8.22ZM12.38,15c2.64,0,3.9-1,3.9-3.1S14.94,9,12.29,9H10.14v6Zm8.68-3.63h1.56l.16,2h.06A3.86,3.86,0,0,1,26,11.08a2.73,2.73,0,0,1,1.2.23L26.86,13a3.1,3.1,0,0,0-1.08-.18c-1,0-2.07.68-2.83,2.57v7.18H21.06Z"
        ></path>
      </g>
      <g v-if="isPHXS">
        <rect class="boxPHXS" x="1" y="1" width="31" height="29"></rect>
        <path
          class="textPHXS"
          d="M7.5,7.45h4.31c3.39,0,5.67,1.13,5.67,4.44s-2.27,4.66-5.57,4.66H9.42v6H7.5ZM11.66,15c2.64,0,3.9-1,3.9-3.1S14.22,9,11.57,9H9.42v6Zm7.22,6.27L19.81,20a5,5,0,0,0,3.3,1.32c1.47,0,2.2-.78,2.2-1.73,0-1.15-1.32-1.66-2.56-2.12-1.57-.58-3.33-1.35-3.33-3.23s1.43-3.18,3.85-3.18a5.67,5.67,0,0,1,3.48,1.26l-.91,1.21a4.2,4.2,0,0,0-2.55-1c-1.41,0-2.06.75-2.06,1.6,0,1.06,1.22,1.47,2.49,1.94,1.61.61,3.4,1.26,3.4,3.39,0,1.81-1.44,3.32-4.07,3.32A6.7,6.7,0,0,1,18.88,21.26Z"
        ></path>
      </g>
      <g v-if="isFLPR">
        <rect class="boxFLPR" x="1" y="1" width="31" height="29"></rect>
        <g>
          <path
            class="textFLPR"
            d="M9.2,7.45h2.17l5.11,15.09h-2l-2.63-8.43c-.54-1.69-1-3.34-1.51-5.09h-.09c-.47,1.75-1,3.4-1.5,5.09L6.05,22.54H4.1Zm-2.42,9h7v1.53H6.78Z"
          ></path>
          <path
            class="textFLPR"
            d="M18.57,11.36h1.57L20.3,13h.06a5.31,5.31,0,0,1,3.75-1.89c2.35,0,3.41,1.52,3.41,4.38v7.08H25.63V15.7c0-2.08-.63-3-2.11-3-1.14,0-1.93.58-3.05,1.71v8.1h-1.9Z"
          ></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "appicon",
  computed: {
    app() {
      return this.$root.$children[0];
    },
    appName() {
      return this.app.identity ? this.app.identity.appName : null;
    },
    isILST() {
      return /ILST/.test(this.appName);
    },
    isAEFT() {
      return /AEFT/.test(this.appName);
    },
    isPPRO() {
      return /PPRO/.test(this.appName);
    },
    isPHXS() {
      return /PHXS/.test(this.appName);
    },
    isFLPR() {
      return /FLPR/.test(this.appName);
    }
  }
};
</script>

<style>
.appicon {
  width: 26px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

[class^="box"] {
  stroke-miterlimit: 10;
  stroke-width: 2px;
}

.boxILST {
  fill: #27180d;
  stroke: #f47920;
}

.textILST {
  fill: #f47521;
}

.boxAEFT {
  fill: #21083e;
  stroke: #b694c5;
}

.textAEFT {
  fill: #b694c5;
}

.boxFLPR {
  fill: #27100b;
  stroke: #ef4427;
}

.textFLPR {
  fill: #ef4427;
}

.boxPHXS {
  fill: #091e25;
  stroke: #00b2dc;
}

.textPHXS {
  fill: #00b2dc;
}

.boxPPRO {
  fill: #2a1131;
  stroke: #b97db6;
}

.textPPRO {
  fill: #b97db6;
}
</style>
