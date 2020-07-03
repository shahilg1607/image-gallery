<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <h3>Image Gallery</h3>
      <v-spacer />
      <v-btn icon @click.stop="toggleSidePanel(true)">
        <v-badge color="black" :content="selectedImages.length || '0'" bordered overlap>
          <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
    };
  },

  computed: {
    ...mapState('image-gallery', ['selectedImages']),
  },

  methods: {
    ...mapMutations('image-gallery', ['toggleSidePanel']),
  },
};
</script>
