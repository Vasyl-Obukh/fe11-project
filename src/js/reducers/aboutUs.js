import { CHANGE_ABOUT_US_CONTENT } from '../constants/actionTypes';

const aboutUs = (state = {}, {type, content}) => {
  switch (type) {
    case CHANGE_ABOUT_US_CONTENT:
      return { ...state, ...content };
    default:
      return state;
  }
};

export default aboutUs;
