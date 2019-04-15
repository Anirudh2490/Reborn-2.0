import React, { Component } from 'react'
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'



const userTypes = [
  { label: "Manufacturer", value: 'manufacturer' },
  { label: "Designer", value: 'designer' },
  { label: "Buyer", value: 'buyer' }
];


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    userType: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
    // this.props.history.push('/');
  }

  handleUserType = (userType) => {
    const userProfile = userType.value;
    this.setState({ userType: userProfile });
    console.log(`Option selected:`, userType);
  }

  render() {
    const { auth, authError } = this.props;
      if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' autocomplete="new-password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id='fullName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <PhoneInput id='phone' placeholder="Enter International Code (Ex. +49) and then phone number" value={ this.state.phone } onChange={ phone => this.setState({ phone }) } />
          </div>
          <div className="input-field">
          <Select id='userType' placeholder="Choose your profession" searchable={false} options= { userTypes } value={ this.state.userType } onChange={ this.handleUserType }/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    // authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp) //mapStateToProps replaces null after auth