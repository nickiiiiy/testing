import {
  startRegisterUser,
  registerSuccess,
  registerError,
  startAuthorizationUser,
  loginSuccess,
  loginError,
} from "../actions/user";
import {
  registerUserService,
  loginUserService,
} from "../../components/services/user";

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(startRegisterUser());

      const response = await registerUserService(userData);

      dispatch(registerSuccess(response.data));
      localStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      const errorText = error.response.data;

      dispatch(registerError(errorText.message));
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(startAuthorizationUser());

      const response = await loginUserService(userData);

      dispatch(loginSuccess(response.data));
      localStorage.setItem("token", response.accessToken);
    } catch (error) {
      const errorText = error.response.data;

      dispatch(loginError(errorText.message));
    }
  };
};
