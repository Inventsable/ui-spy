<template>
  <div class="scrollbar-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 540">
      <rect class="scollbar-trans" width="80" height="540" />
      <g>
        <rect class="scrollbar-track" x="8.5" y="7.5" width="22" height="520" />
        <rect class="scrollbar-thumb" x="8.5" y="157.5" width="22" height="129" rx="11" />
        <path
          class="scollbar-hover"
          d="M10.93,22l6.32-6.32a1.05,1.05,0,0,1,1.5,0L25.07,22"
          transform="translate(0.5 -0.5)"
        />
        <path
          class="scollbar-hover"
          d="M25.07,512.37l-6.32,6.32a1.07,1.07,0,0,1-1.5,0l-6.32-6.32"
          transform="translate(0.5 -0.5)"
        />
      </g>
      <g>
        <rect class="scrollbar-track" x="50.5" y="7.5" width="22" height="520" />
        <rect class="scrollbar-misc" x="50.5" y="104.5" width="22" height="129" rx="11" />
        <path
          class="scollbar-hover"
          d="M52.93,22l6.32-6.32a1.05,1.05,0,0,1,1.5,0L67.07,22"
          transform="translate(0.5 -0.5)"
        />
        <path
          class="scollbar-hover"
          d="M67.07,512.37l-6.32,6.32a1.07,1.07,0,0,1-1.5,0l-6.32-6.32"
          transform="translate(0.5 -0.5)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "scrollbars"
};
</script>

<style>
.scrollbar-container {
  min-width: 50px;
  max-width: 50px;
}

.scollbar-trans,
.scollbar-hover {
  fill: none;
}

.scrollbar-track {
  fill: var(--color-scrollbar);
  stroke: var(--color-scrollbar);
}

.scrollbar-track,
.scollbar-hover {
  stroke-miterlimit: 10;
}

.scrollbar-thumb {
  fill: var(--color-scrollbar-thumb);
}

.scollbar-hover {
  stroke: var(--color-scrollbar-thumb-hover);
  stroke-width: 2px;
}

.scrollbar-misc {
  fill: var(--color-scrollbar-arrow);
}
</style>

