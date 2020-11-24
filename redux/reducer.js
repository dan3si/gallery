import { add } from 'react-native-reanimated';
import actionTypes from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGES:
      return {
        ...state,
        images: [
          ...state.images,
          ...action.images,
        ],
      };
    
    default:
      return state;
  }
}
