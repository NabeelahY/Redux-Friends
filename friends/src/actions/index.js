import axios from "axios";

export const FRIENDS_LOAD = "FRIENDS_LOAD";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_FAILURE = "FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_LOAD });

  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FRIENDS_FAILURE, payload: err.message });
    });
};

export const login = (username, password) => dispatch => {
    axios.post('http://localhost:3000/api/login', {username, password})
    .then(res => {
        localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log(err.message))
} 