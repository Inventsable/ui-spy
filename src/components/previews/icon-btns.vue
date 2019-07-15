<template>
  <div class="iconbtns-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90">
      <g>
        <g id="toolbar-btn-active">
          <rect class="iconbtn-1" x="46" y="8" width="36" height="29" rx="1.35" />
          <polygon class="iconbtn-2" points="59.5 31.64 64.73 26.5 72 26.5 59.5 13.91 59.5 31.64" />
        </g>
        <g id="toolbar-btn-hover">
          <rect class="iconbtn-3" x="92.5" y="8.25" width="36" height="29" rx="1.35" />
          <polygon
            class="iconbtn-4"
            points="105 31.89 110.23 26.75 117.5 26.75 105 14.16 105 31.89"
          />
        </g>
        <g id="toolbar-btn">
          <polygon class="iconbtn-4" points="13 31.89 18.23 26.75 25.5 26.75 13 14.16 13 31.89" />
        </g>
        <g id="icon-btn-active">
          <rect class="iconbtn-5" x="48" y="47.75" width="31" height="31" rx="1.77" />
          <line class="iconbtn-6" x1="53" y1="59.25" x2="75" y2="59.25" />
          <line class="iconbtn-6" x1="53" y1="70.25" x2="75" y2="70.25" />
          <rect class="iconbtn-7" x="59" y="55.75" width="10" height="7" />
          <rect class="iconbtn-7" x="56" y="67.25" width="16" height="6" />
        </g>
        <g id="icon-btn-hover">
          <rect class="iconbtn-8" x="95" y="47.75" width="31" height="31" rx="1.77" />
          <line class="iconbtn-6" x1="100" y1="61.75" x2="122" y2="61.75" />
          <line class="iconbtn-6" x1="100" y1="73.75" x2="122" y2="73.75" />
          <rect class="iconbtn-7" x="106" y="54.75" width="10" height="6" />
          <rect class="iconbtn-7" x="103" y="66.75" width="16" height="6" />
        </g>
        <g id="icon-btn">
          <line class="iconbtn-6" x1="8" y1="55.75" x2="30" y2="55.75" />
          <line class="iconbtn-6" x1="8" y1="67.75" x2="30" y2="67.75" />
          <rect class="iconbtn-7" x="14" y="56.75" width="10" height="6" />
          <rect class="iconbtn-7" x="11" y="68.75" width="16" height="6" />
        </g>
      </g>
      <rect class="iconbtn-9" width="140" height="90" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "iconbtns"
};
</script>

<style>
.iconbtns-container {
  width: 110px;
}

.iconbtn-1 {
  fill: #1f2020;
  stroke: #3f3f3f;
}

.iconbtn-1,
.iconbtn-3,
.iconbtn-5,
.iconbtn-6,
.iconbtn-8 {
  stroke-miterlimit: 10;
}

.iconbtn-1,
.iconbtn-2,
.iconbtn-3,
.iconbtn-4,
.iconbtn-5,
.iconbtn-6,
.iconbtn-8 {
  stroke-width: 2px;
}

.iconbtn-2,
.iconbtn-6,
.iconbtn-9 {
  fill: none;
}

.iconbtn-2,
.iconbtn-4,
.iconbtn-6 {
  stroke: #b6b7b7;
}

.iconbtn-2,
.iconbtn-4 {
  stroke-linejoin: round;
}

.iconbtn-3 {
  fill: #292929;
  stroke: #484848;
}

.iconbtn-4,
.iconbtn-7 {
  fill: #b6b7b7;
}

.iconbtn-5 {
  fill: #2e2e2e;
}

.iconbtn-5,
.iconbtn-8 {
  stroke: #4b4b4b;
}

.iconbtn-8 {
  fill: #3f3f3f;
}
</style>