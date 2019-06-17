<template>
  <div class="pt-3">
    <v-divider></v-divider>
    <v-list two-line v-if="list.length">
      <template v-for="(item, key) in displayList">
        <v-list-tile :class="item.locked ? 'list-item-locked' : 'list-item' " :key="key">
          <v-list-tile-action>
            <span :style="getPreviewStyle(item)"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              :style="item.locked ? 'color: var(--apo-color-scrollbar-thumb-hover)' : '' "
            >{{item.title}}</v-list-tile-title>
            <v-list-tile-sub-title
              class="text--uppercase"
              :style="item.locked ? 'color: var(--apo-color-scrollbar-thumb-hover)' : '' "
            >
              <span>{{getItemColor(item)}}</span>
              <span class="pl-2">{{item.delta}}</span>
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click="lockItem(item)">
              <v-icon>mdi-lock</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn :disabled="item.locked" @click="deleteItem(key)" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import getPanelBG from "@/utils/color/getPanelBG.js";
import getColorFromDeltaOffset from "@/utils/color/getColorFromDeltaOffset.js";
import readFile from "@/utils/fs/readFile.js";
import getExtRoot from "@/utils/main/getExtRoot.js";
import getAppName from "@/utils/main/getAppName.js";

import appHexToRGB from "@/utils/color/appHexToRGB.js";

export default {
  name: "aposheet",
  props: {
    list: Array
  },
  data: () => ({
    displayList: []
  }),
  computed: {
    app() {
      return this.$root.$children[0];
    },
    masterList() {
      return this.app.main.apoColors;
    }
  },
  watch: {
    list(items) {
      this.displayList = this.constructDisplayList(items);
    }
  },
  mounted() {
    console.log("Aposheet mounted");
    this.displayList = this.constructDisplayList(this.list);
  },
  methods: {
    lockItem(item) {
      console.log(`Locking ${item.title}`);
      item.locked = !item.locked;
      console.log(item.locked);
    },
    deleteItem(index) {
      this.masterList.splice(index, 1);
    },
    constructDisplayList(list) {
      return list.map(item => {
        return {
          title: item.title,
          delta: item.delta,
          locked: false
        };
      });
    },
    getItemColor(item) {
      return getColorFromDeltaOffset(getPanelBG(), item.delta);
    },
    getPreviewStyle(item) {
      return `
        width: 20px;
        height: 20px;
        border: 1px solid grey;
        background-color: ${this.getItemColor(item)};
      `;
    }
  }
};
</script>

<style>
.v-list--two-line .v-list__tile {
  min-height: 50px !important;
  max-height: 70px !important;
  /* height: 60px !important; */
  border: 1px solid var(--color-bg);
}

.v-list {
  padding: 0px;
}
.v-list__tile__content,
.v-list__tile__action {
  height: "";
}

[class^="list-item"] {
  user-select: none;
  cursor: default;
}

.list-item:hover {
  background-color: rgba(255, 255, 255, 0.02);
}
.list-item-locked {
  color: var(--apo-color-text-disabled);
}
</style>
