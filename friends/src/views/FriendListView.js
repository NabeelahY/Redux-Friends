import React, { Component } from 'react'
import FriendsList from '../components/FriendsList';
// import PropTypes from 'prop-types'

export class FriendListView extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
}

export default FriendListView
