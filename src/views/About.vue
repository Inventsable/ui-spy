<template>
  <div class="pa-2 sandbox">
    <div class="left-pane">
      <checkboxes />
      <buttons />
      <iconbtns />
      <inputs />
    </div>
    <scrollbars />
  </div>
</template>

<script>
import checkboxes from "@/components/previews/checkboxes";
import scrollbars from "@/components/previews/scrollbars";
import buttons from "@/components/previews/buttons";
import iconbtns from "@/components/previews/icon-btns";
import inputs from "@/components/previews/inputs";

export default {
  name: "preview",
  components: {
    checkboxes,
    scrollbars,
    buttons,
    inputs,
    iconbtns
  }
};
</script>


<style>
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-text-default);
}

.left-pane {
  display: flex;
  flex-direction: column;
}

.sandbox {
  display: flex;
  justify-content: space-between;
}
</style>
