import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/chat'>Chat with us</NavLink></li>
            <li><NavLink to='/profile' className='btn btn-floating blue lighten-2'>Me</NavLink></li>
            <li><NavLink to='/loggedOff'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;
