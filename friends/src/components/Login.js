import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

const Login = props => { 
    console.log(props)
    const usernameRef = React.createRef()

    const passwordRef = React.createRef()

    const userLogin = (e) => {
        e.preventDefault()
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        props.login(username, password)
        .then(() => {
            props.history.push('/protected')
        })
    }

    return (
        <div>
            <form onSubmit={userLogin}>
                <input type='text' ref={usernameRef} />
                <input type='text' ref={passwordRef} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default connect(
    state => state, 
    { login }
)(Login)
