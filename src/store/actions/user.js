import userEnums from "../enums/user";

export const startRegisterUser = (payload) => {
  return {
    type: userEnums.REGISTER,
    payload,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: userEnums.REGISTER_SUCCESS,
    payload,
  };
};

export const registerError = (error) => {
  return {
    type: userEnums.REGISTER_ERROR,
    error,
  };
};

export const startAuthorizationUser = (payload) => {
  return {
    type: userEnums.LOGIN,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: userEnums.LOGIN_SUCCESS,
    payload,
  };
};

export const loginError = (error) => {
  return {
    type: userEnums.LOGIN_ERROR,
    error,
  };
};
