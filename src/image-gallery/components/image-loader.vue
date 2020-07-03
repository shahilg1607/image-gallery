<template>
  <v-card flat tile class="d-flex">
    <v-img :src="image.url" :lazy-src="image.url" aspect-ratio="1" class="grey lighten-2">
      <div class="d-flex pa-2">
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="image.selected"
          off-icon="mdi-checkbox-blank-circle-outline"
          on-icon="mdi-checkbox-marked-circle"
          hide-details
          class="mt-0"
          color="black"
          @change="manageImage()"
        ></v-checkbox>
      </div>
      <v-row align="end" class="lightbox white--text namerow">
        <v-col class="nameblock">
          <div class="subheading">{{ image.name }}</div>
        </v-col>
      </v-row>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
/**
 * This component is used to load the image base on the image configuration
 *
 * @vueprop {Object} [imageDetail] holds the image detail
 */
import { mapActions } from 'vuex';

export default {
  name: 'ImageLoader',

  props: {
    imageDetail: { type: Object, required: true },
  },

  data() {
    return {
      image: this.imageDetail,
    };
  },

  // NOTE: this watch is to be kept in order to reset the image detail.
  // It was not working on reset when share button was clicked.
  watch: {
    imageDetail(nv) {
      if (nv) {
        this.image = nv;
      }
    },
  },

  methods: {
    ...mapActions('image-gallery', ['addImage', 'removeImage']),

    manageImage() {
      if (this.image.selected === true) {
        this.addImage(this.image);
      } else {
        this.removeImage(this.image.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nameblock {
  background-color: rgba(black, 0.5);
}
.namerow {
  position: absolute;
  bottom: 0;
  left: 12px;
  width: 100%;
  @media screen and (max-width: 780px) {
    display: none;
  }
}
</style>
