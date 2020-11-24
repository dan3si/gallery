import store from '../redux/store';
import actionTypes from './types';
import { BASE_URL, accessToken } from '../global/API';

export const addImages = (images) => {
  return ({
    type: actionTypes.ADD_IMAGES,
    images: Array.isArray(images)
      ? images
      : [],
  });
}

export const downloadImages = async () => {
  const response = await fetch(`${BASE_URL}${accessToken}`)
  const data = await response.json();
  store.dispatch(addImages(data));
};
