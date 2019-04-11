import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/chat'>Chat with us</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/loggedOff'>Signup</NavLink></li>
        </ul>
    )
}

export default SignedoutLinks;
