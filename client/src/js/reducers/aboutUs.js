import { CHANGE_ABOUT_CONTENT } from '../constants/actionTypes';

const aboutUs = (state = {}, { type, content }) => {
  switch (type) {
    case CHANGE_ABOUT_CONTENT:
      return { ...state, ...content };
    default:
      return state;
  }
};

export default aboutUs;
