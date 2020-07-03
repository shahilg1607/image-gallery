<template>
  <v-navigation-drawer v-model="showSidePanel" class="nav-drawer" right temporary fixed>
    <template v-slot:prepend>
      <v-row no-gutters class="ma-3">
        <v-col cols="1">
          <v-badge color="black" :content="selectedImages.length || '0'" bordered overlap>
            <v-icon @click="toggleSidePanel(false)">mdi-checkbox-marked-circle-outline</v-icon>
          </v-badge>
        </v-col>
        <v-col cols="10" class="text-center">{{ tab }}</v-col>
        <v-col cols="1" class="text-right">
          <v-icon @click="toggleSidePanel(false)">mdi-close</v-icon>
        </v-col>
      </v-row>
    </template>
    <v-divider></v-divider>
    <v-tabs v-model="tab" centered fixed-tabs color="black">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#Your selection">
        <v-icon>mdi-view-grid</v-icon>
      </v-tab>
      <v-tab href="#Share" :disabled="selectedImages.length === 0">
        <v-icon>mdi-email-outline</v-icon>
      </v-tab>
    </v-tabs>
    <selection-view v-if="tab === 'Your selection'" />
    <share-images v-if="tab === 'Share'" />
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SelectionView from './selection-view';
import ShareImages from './share-images';
/**
  This component is used to manage the right side panel
 */
export default {
  name: 'SidePanel',

  components: { SelectionView, ShareImages },

  data() {
    return {
      tab: 'Your selection',
    };
  },

  computed: {
    ...mapState('image-gallery', ['hasSidePanel', 'selectedImages']),

    showSidePanel: {
      get() {
        return this.hasSidePanel;
      },
      set(value) {
        if (!value) {
          this.toggleSidePanel(value);
        }
      },
    },
  },

  methods: {
    ...mapMutations('image-gallery', ['toggleSidePanel']),
  },
};
</script>

<style lang="scss" scoped>
.nav-drawer {
  width: 50% !important;
  @media screen and (max-width: 1200px) {
    width: 70% !important;
  }
}
</style>
