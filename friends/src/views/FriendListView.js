import React, { Component } from "react";
import { connect } from "react-redux";
import FriendsList from "../components/FriendsList";
// import PropTypes from 'prop-types'
import { getFriends } from "../actions";

export class FriendListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.props.friends} />
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
