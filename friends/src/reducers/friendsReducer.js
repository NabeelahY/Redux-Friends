import { FRIENDS_LOAD, FRIENDS_SUCCESS, FRIENDS_FAILURE } from "../reducers";

const initialState = {
  friends: [],
  loading: false,
  error: ""
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_LOAD:
      return {
        ...state,
        loading: true
      };
    case FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload
      };
    case FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
