import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

export const logIn = ({name, login, password, email}) => {
  return {
    type: LOG_IN,
    name,
    login,
    password,
    email
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};