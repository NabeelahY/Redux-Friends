import axios from "axios";
import axiosImproved from "../axios";

export const FRIENDS_LOAD = "FRIENDS_LOAD";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_FAILURE = "FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_LOAD });

  axiosImproved()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FRIENDS_FAILURE, payload: err.message });
    });
};

export const LOGIN_LOAD = "LOGIN_LOAD";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_LOAD });
  return axios
    .post("http://localhost:5000/api/login", { username, password })
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch(getFriends());
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => console.log(err.message));
};


export const addFriend = ({newFriend}) => dispatch => {
    return axiosImproved()
    .post('http://localhost:5000/api/friends', ...newFriend)
    .then(res => {
        console.log(res.data)
        dispatch(getFriends())
    })
    .catch(err => console.log(err.message));
}