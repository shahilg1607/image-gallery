<template>
  <v-form v-model="isValid">
    <v-card flat class="ma-5">
      <v-card-title>
        <h5 class="subtitle-1">Add contact</h5>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="shareDetail.email"
          name="email"
          label="Email address"
          outlined
          :rules="[ValidationRules.required, ValidationRules.email]"
        ></v-text-field>
        <v-text-field v-model="shareDetail.firstName" name="firstName" label="First name" outlined></v-text-field>
        <v-text-field v-model="shareDetail.lastName" name="lastName" label="Last name" outlined></v-text-field>
        <v-text-field v-model="shareDetail.company" name="Company" label="Company" outlined></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          class="ma-1 text-capitalize"
          :disabled="!isValid"
          min-width="100"
          outlined
          color="rgba(0, 0, 0, 0.6)"
          @click="shareSelections"
          >Share</v-btn
        >
        <v-btn
          class="ma-1 text-capitalize"
          min-width="100"
          outlined
          color="rgba(0, 0, 0, 0.6)"
          exact
          @click="toggleSidePanel(false)"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
/**
  This component is used to load the form in the share tab
 */
import { mapState, mapMutations, mapActions } from 'vuex';
import ValidationRules from '../../common/validation-rules';

export default {
  name: 'ShareImages',

  data() {
    return {
      isValid: false,
      ValidationRules,
      shareDetail: {},
    };
  },

  computed: {
    ...mapState('image-gallery', ['selectedPresentation', 'selectedImages']),
  },

  methods: {
    ...mapMutations('image-gallery', ['removeAllPresentation', 'toggleSidePanel']),
    ...mapActions('image-gallery', ['removeAllImages']),

    shareSelections() {
      const result = {
        ...this.shareDetail,
        selection: [...this.selectedImages, ...this.selectedPresentation],
      };
      console.log('Result:', result);
      this.shareDetail = {};
      this.removeAllPresentation();
      this.removeAllImages();
      this.toggleSidePanel(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-footer {
  left: 0px !important;
  margin-bottom: 60px;
}
</style>
