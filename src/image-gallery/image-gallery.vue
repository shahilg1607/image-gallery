<template>
  <div>
    <side-panel />
    <v-row class="mx-1">
      <v-col v-for="image in imageList" :key="image.id" class="d-flex child-flex" cols="3">
        <image-loader :image-detail="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
/**
 * Image gallery component use to show the list of image in the grid vue where user
 * can select and deselect it.
 */
import { mapState, mapActions } from 'vuex';
import images from './images-detail.json'; // here we have list of images config
import SidePanel from './components/side-panel';
import ImageLoader from './components/image-loader';

export default {
  name: 'ImageGallery',

  components: { ImageLoader, SidePanel },

  computed: {
    ...mapState('image-gallery', ['selectedImages']),
    // created the computed propertly to get the list of image to be shown.
    imageList() {
      return images.map((imageObj) => {
        // logic here is to check the selected image and if found then we use to make them selected.
        if (this.selectedImages.some((selectedObj) => selectedObj.id === imageObj.id)) {
          return {
            ...imageObj,
            selected: true,
          };
        }
        return { ...imageObj, selected: false };
      });
    },
  },

  async created() {
    await this.getSelctedImages();
  },

  methods: {
    ...mapActions('image-gallery', ['getSelctedImages']),
  },
};
</script>
