import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import FriendsList from "../components/FriendsList";
import Login from "../components/Login";
// import PropTypes from 'prop-types'
import { getFriends } from "../actions";
import FriendForm  from "../components/FriendForm";

export class FriendListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              this.props.loading ? (
                <Loader type="ThreeDots" color="#ccc" height={80} width={80} />
              ) : (
                <FriendsList friends={this.props.friends} />
              )
            ) : (
              <Redirect to="login" />
            )
          }
        />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/add-friend" render={props => <FriendForm {...props} />} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  error: state.friendsReducer.error,
  loading: state.friendsReducer.loading
});
export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);
