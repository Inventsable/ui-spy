<template>
  <div class="iconbtns-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 90">
      <g>
        <g id="toolbar-btn-active">
          <rect class="toolbar-btn-active" x="46" y="8" width="36" height="29" rx="1.35" />
          <polygon
            class="toolbar-btn-active-content"
            points="59.5 31.64 64.73 26.5 72 26.5 59.5 13.91 59.5 31.64"
          />
        </g>
        <g id="toolbar-btn-hover">
          <rect class="toolbar-btn-hover" x="92.5" y="8.25" width="36" height="29" rx="1.35" />
          <polygon
            class="toolbar-btn-default"
            points="105 31.89 110.23 26.75 117.5 26.75 105 14.16 105 31.89"
          />
        </g>
        <g id="toolbar-btn">
          <polygon
            class="toolbar-btn-default"
            points="13 31.89 18.23 26.75 25.5 26.75 13 14.16 13 31.89"
          />
        </g>
        <g id="toolbar-btn-active">
          <rect class="icon-btn-active" x="48" y="47.75" width="31" height="31" rx="1.77" />
          <line class="icon-btn-content" x1="53" y1="59.25" x2="75" y2="59.25" />
          <line class="icon-btn-content" x1="53" y1="70.25" x2="75" y2="70.25" />
          <rect class="icon-btn-fill" x="59" y="55.75" width="10" height="7" />
          <rect class="icon-btn-fill" x="56" y="67.25" width="16" height="6" />
        </g>
        <g id="toolbar-btn-hover">
          <rect class="icon-btn-hover" x="95" y="47.75" width="31" height="31" rx="1.77" />
          <line class="icon-btn-content" x1="100" y1="61.75" x2="122" y2="61.75" />
          <line class="icon-btn-content" x1="100" y1="73.75" x2="122" y2="73.75" />
          <rect class="icon-btn-fill" x="106" y="54.75" width="10" height="6" />
          <rect class="icon-btn-fill" x="103" y="66.75" width="16" height="6" />
        </g>
        <g id="toolbar-btn">
          <line class="icon-btn-content" x1="8" y1="55.75" x2="30" y2="55.75" />
          <line class="icon-btn-content" x1="8" y1="67.75" x2="30" y2="67.75" />
          <rect class="icon-btn-fill" x="14" y="56.75" width="10" height="6" />
          <rect class="icon-btn-fill" x="11" y="68.75" width="16" height="6" />
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

.toolbar-btn-active {
  fill: var(--color-btn-toolbar-active);
  stroke: var(--color-btn-toolbar-active-border);
}

.toolbar-btn-active,
.toolbar-btn-hover,
.icon-btn-active,
.icon-btn-content,
.icon-btn-hover {
  stroke-miterlimit: 10;
}

.toolbar-btn-active,
.toolbar-btn-active-content,
.toolbar-btn-hover,
.toolbar-btn-default,
.icon-btn-active,
.icon-btn-content,
.icon-btn-hover {
  stroke-width: 2px;
}

.toolbar-btn-active-content,
.icon-btn-content,
.iconbtn-9 {
  fill: none;
}

.toolbar-btn-active-content,
.toolbar-btn-default,
.icon-btn-content {
  stroke: var(--color-icon);
}

.toolbar-btn-active-content,
.toolbar-btn-default {
  stroke-linejoin: round;
}

.toolbar-btn-hover {
  fill: var(--color-btn-toolbar-hover);
  stroke: var(--color-btn-toolbar-hover-border);
}

.toolbar-btn-default,
.icon-btn-fill {
  fill: var(--color-icon);
}

.icon-btn-active {
  fill: var(--color-btn-icon-active);
}

.icon-btn-active {
  stroke: var(--color-btn-icon-active-border);
}
.icon-btn-hover {
  stroke: var(--color-btn-icon-hover-border);
}

.icon-btn-hover {
  fill: var(--color-btn-icon-hover);
}
</style>