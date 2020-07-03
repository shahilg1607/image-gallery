/**
 * Method to retreive the stored seleced images
 */
export const getSelctedImages = ({ commit }) => {
  try {
    const selectedImages = JSON.parse(localStorage.getItem('selectedImages')) || [];
    commit('setSelectedImages', selectedImages);
    return selectedImages;
  } catch (error) {}
};

/**
 * Method to add the new image detail to the seleced list and store it in localStorage
 * @param {Object} selectedImage is the object of image detail
 */
export const addImage = ({ state, commit }, selectedImage) => {
  try {
    commit('addSelectedImage', selectedImage);
    localStorage.setItem('selectedImages', JSON.stringify(state.selectedImages));
  } catch (error) {}
};

/**
 * Method to remove the image form the seleced image list.
 * @param {Number} imageId is the unique id of the image
 */
export const removeImage = ({ state, commit }, imageId) => {
  try {
    const selectedImages = state.selectedImages.filter((image) => image.id !== imageId);
    commit('setSelectedImages', selectedImages);
    localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
  } catch (error) {}
};

/**
 * Method to remove all the selected images
 */
export const removeAllImages = ({ commit }) => {
  try {
    commit('resetSelectedImages');
    localStorage.removeItem('selectedImages');
  } catch (error) {}
};
