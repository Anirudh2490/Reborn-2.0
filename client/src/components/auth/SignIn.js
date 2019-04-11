import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import { withFirebase, Firebase } from '../Firebase';

class Login extends Component {

	constructor(props) {
        super(props);
        this.state = { email: "", password: "", error: false };
  }

  handleChange = (event) => {
  	const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email
    const password = this.state.password;
    Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  };

	render() {
		return(
			<div>
				<Form onSubmit={this.handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                />
            </Form.Group>
            <input className="btn btn-primary" type="submit" value="Login" />
        </Form>
			</div>
		);
	}
}

export default Login;