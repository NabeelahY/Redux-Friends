import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import Login from "../components/Login";
// import PropTypes from 'prop-types'
import { getFriends } from "../actions";

export class FriendListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <Router>
          <Route
          {...this.props}
            to="/protected"
            render={() =>
              localStorage.getItem("token") ? (
                <FriendsList friends={this.props.friends} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route to="/login" render={props => <Login {...props} />} />
        </Router>
      </div>
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
