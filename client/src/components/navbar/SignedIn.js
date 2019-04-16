import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/chat'>Chat with us</NavLink></li>
            <li><NavLink to='/profile' className='btn btn-floating blue lighten-2'>Me</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

  export default connect(null, mapDispatchToProps)(SignedInLinks)
