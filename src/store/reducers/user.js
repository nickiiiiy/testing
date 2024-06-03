import userEnums from "../enums/user";

const initialState = {
  error: null,
  user: [],
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userEnums.REGISTER:
      return {
        ...state,
        error: null,
      };

    case userEnums.REGISTER_SUCCESS:
      return {
        error: null,
        isAuth: true,
        user: action.user,
      };

    case userEnums.REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case userEnums.LOGIN:
      return {
        ...state,
        error: null,
      };
    case userEnums.LOGIN_SUCCESS:
      return {
        error: null,
        isAuth: true,
        user: action.user,
      };
    case userEnums.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
