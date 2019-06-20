import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login, getFriends } from "../actions";

const Login = props => {
  console.log(props);
  const usernameRef = React.createRef();

  const passwordRef = React.createRef();

  const userLogin = e => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    props.login(username, password)
  };

  return (
    <div>
      <form onSubmit={userLogin}>
        <input type="text" ref={usernameRef} />
        <input type="text" ref={passwordRef} />
        <button type="submit">
          {props.loggingIn ? (
            <Loader type="ThreeDots" color="#ccc" height={20} width={20} />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

// const mapStateToProps = state => ({
//   loggingIn: state.loginReducer.loggingIn
// });

export default connect(
//   mapStateToProps,
state => state,
  { login, getFriends }
)(Login);
