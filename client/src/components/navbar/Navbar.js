import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

const NavBar = () => {
    return(
        <nav className="nav-wrapper grey darken-8">
          <div className="container">
            <Link to='/' className='brand-logo'>Shoppermint Networks</Link>
            <SignedIn />
            <SignedOut />
          </div>
        </nav>
    )
}

export default NavBar;

