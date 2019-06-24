import React from 'react';
import { connect } from "react-redux";
import { deleteFriend } from '../actions'

const Friend = (props) => {
    console.log(props)

    const deletePal = id => {
        props.deleteFriend(id)
    }
    return (
        <div>{ props.friend.name } <span onClick={() => deletePal(props.friend.id)}>X</span></div>
    )
}

export default connect(null, {deleteFriend})(Friend)
