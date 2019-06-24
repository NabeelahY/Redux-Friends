import { LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const initialState = {
  error: "",
  token: "",
  loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOAD:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false
      };

    default:
      return state;
  }
};
