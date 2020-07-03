<template>
  <div>
    <v-row class="mx-1" style="max-height: 300px; overflow-y: auto;">
      <v-col v-for="image in selectedImages" :key="image.id" class="d-flex child-flex" cols="3">
        <image-loader :image-detail="image" />
      </v-col>
    </v-row>
    <presentation-selector />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageLoader from './image-loader';
import PresentationSelector from './presentation-selector';
export default {
  name: 'SelectionView',

  components: { ImageLoader, PresentationSelector },

  computed: {
    ...mapState('image-gallery', ['selectedImages']),
  },
};
</script>
