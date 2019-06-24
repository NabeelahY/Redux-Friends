import React from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

export const FriendForm = props => {
  console.log(props);
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const emailRef = React.createRef();

  const addNewFriend = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const email = emailRef.current.value;

    props.addFriend(name, age, email)
    .then(() => props.history.push("/"));
  };

  
  return (
    <form onSubmit={addNewFriend}>
      <input type="text" placeholder="Enter name" ref={nameRef} />
      <input type="text" placeholder="Enter age" ref={ageRef} />
      <input type="email" placeholder="Enter email" ref={emailRef} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default connect(
  null,
  { addFriend }
)(FriendForm);
