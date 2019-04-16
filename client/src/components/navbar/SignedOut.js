import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/chat'>Chat with us</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
        </ul>
    )
}

export default SignedoutLinks;
