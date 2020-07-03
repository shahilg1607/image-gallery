<template>
  <v-card class="presentation-list">
    <v-card-text>
      <v-list>
        <v-list-item-title class="pa-2" style="height: 45px; background-color: lightgrey;">
          <div class="d-flex">
            <span class="subtitle-1">
              Custom presentation
            </span>
            <v-spacer></v-spacer>
            <v-checkbox
              v-model="selectAll"
              off-icon="mdi-checkbox-blank-circle-outline"
              on-icon="mdi-checkbox-marked-circle"
              hide-details
              color="black"
              class="mt-0 pr-2"
              @change="selectAllPresentation()"
            ></v-checkbox>
          </div>
        </v-list-item-title>
        <v-list-item v-for="presentation in presentationList" :key="presentation.id" dense>
          <v-list-item-icon>
            <v-icon>mdi-chart-areaspline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="presentation.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-checkbox
              v-model="presentation.selected"
              off-icon="mdi-checkbox-blank-circle-outline"
              on-icon="mdi-checkbox-marked-circle"
              hide-details
              class="mt-0"
              color="black"
              @change="managePresentation(presentation)"
            ></v-checkbox>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PresentationType',

  data() {
    return {
      presentationList: [
        { name: 'Providing Information', id: 1, selected: false },
        { name: 'Teaching a Skill', id: 2, selected: false },
        { name: 'Reporting Progress', id: 3, selected: false },
        { name: 'Solving a Problem', id: 4, selected: false },
      ],
      selectAll: false,
    };
  },

  methods: {
    ...mapMutations('image-gallery', [
      'addPresentation',
      'addAllPresentation',
      'removePresentation',
      'removeAllPresentation',
    ]),

    managePresentation(presentation) {
      if (presentation.selected === true) {
        this.addPresentation(presentation);
      } else {
        this.selectAll = false;
        this.removePresentation(presentation.id);
      }
    },

    selectAllPresentation() {
      if (this.selectAll === true) {
        this.presentationList = this.presentationList.map((presentation) => {
          return { ...presentation, selected: true };
        });
        this.addAllPresentation(this.presentationList);
      } else {
        this.presentationList = this.presentationList.map((presentation) => {
          return { ...presentation, selected: false };
        });
        this.removeAllPresentation();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.presentation-list {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
