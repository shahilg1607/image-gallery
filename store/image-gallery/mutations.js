/**
 * Method to toggle the right side pane by updateing the state prop.
 * @param {Boolean} showSidePanel is the boolean value
 */
export const toggleSidePanel = (state, showSidePanel) => {
  state.hasSidePanel = showSidePanel;
};

/**
 * Method to set all the selected images in the state prop.
 * @param {Array} selectedImages holds the multiple image object to be stored in state.
 */
export const setSelectedImages = (state, selectedImages) => {
  state.selectedImages = selectedImages;
};

/**
 * Method to add the single imaged object to the existing list
 * @param {Object} selectedImage holds the detail of the image
 */
export const addSelectedImage = (state, selectedImage) => {
  state.selectedImages.push(selectedImage);
};

/**
 * Method to reset the selected images in the state when we used to reset on share button click
 */
export const resetSelectedImages = (state) => {
  state.selectedImages = [];
};

/**
 * Method to add all the presentation type to the state prop
 * @param {Array} presentations list of presentation object in the array
 */
export const addAllPresentation = (state, presentations) => {
  state.selectedPresentation = presentations;
};

/**
 * Method to add one single presentation type to the existing presentation list.
 * @param {Object} presentation holds the properties for the single presentation.
 */
export const addPresentation = (state, presentation) => {
  state.selectedPresentation.push(presentation);
};

/**
 * Method to remove all the selected presentation from state.
 */
export const removeAllPresentation = (state) => {
  state.selectedPresentation = [];
};

/**
 * Method to remove the specific presentation from the list in the state.
 * @param {Number} presentationId unique id of the presentation.
 */
export const removePresentation = (state, presentationId) => {
  state.selectedPresentation = state.selectedPresentation.filter((presentation) => presentation.id === presentationId);
};
