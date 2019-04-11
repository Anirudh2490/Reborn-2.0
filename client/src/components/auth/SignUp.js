import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import axios from '../../axios';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", phone: "", password: "", confirmation_password: "", role: "", error: false };
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({[name]: value})
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const formData = {
			name: this.state.name,
			phone: this.state.phone,
			email: this.state.email,
			password: this.state.password,
			confirmation_password: this.state.confirmation_password,
			role: this.state.role	
		}
		console.log(formData);
		axios.post('/users.json', formData)
			.then(response => 
				console.log(response)
				// this.props.history.push("/login")
			)
			.catch(error => console.log(error));
	}

	render() {
		return(
			<div>
				<h1>SignUp Form</h1>
					<Form onSubmit={this.handleFormSubmit}>
	          <Form.Group controlId="name">
	              <Form.Label>Full Name</Form.Label>
	              <Form.Control
	                  size="sm"
	                  type="name"
	                  placeholder="Name"
	                  name="name"
	                  value={this.state.name}
	                  onChange={e => this.handleChange(e)}
	              />
	          </Form.Group>

	          <Form.Group controlId="formBasicEmail">
	              <Form.Label>Email address</Form.Label>
	              <Form.Control
	                  size="sm"
	                  type="email"
	                  placeholder="Enter email"
	                  name="email"
	                  value={this.state.email}
	                  onChange={e => this.handleChange(e)}
	              />
	              <Form.Text className="text-muted">
	                  We'll never share your email with anyone else.
	              </Form.Text>
	          </Form.Group>

	          <Form.Group controlId="formBasicPhone">
	              <Form.Label>Email address</Form.Label>
	              <Form.Control
	                  size="sm"
	                  type="phone"
	                  placeholder="Enter phone number"
	                  name="phone"
	                  value={this.state.phone}
	                  onChange={e => this.handleChange(e)}
	              />
	              <Form.Text className="text-muted">
	                  We'll never share your email with anyone else.
	              </Form.Text>
	          </Form.Group>

	          <Form.Group controlId="formBasicPassword">
	              <Form.Label>Password</Form.Label>
	              <Form.Control
	                  size="sm"
	                  type="password"
	                  placeholder="Password"
	                  name="password"
	                  value={this.state.password}
	                  onChange={e => this.handleChange(e)}
	              />
	              {this.state.password.length < 8 ? (
	                  <Form.Text style={{ color: "red", fontSize: "0.5em" }}>
	                      Your password has to be 8 character long at least
	                  </Form.Text>
	              ) : (
	                      <Form.Text style={{ color: "green", fontSize: "0.5em" }}>
	                          Password is valid
	                      </Form.Text>
	                  )}
	          </Form.Group>

	          <Form.Group controlId="formBasicConfirmationPassword">
	              <Form.Label>Password</Form.Label>
	              <Form.Control
	                  size="sm"
	                  type="password"
	                  placeholder="Confirmation Password"
	                  name="confirmation_password"
	                  value={this.state.confirmation_password}
	                  onChange={e => this.handleChange(e)}
	              />
	              {this.state.confirmation_password.length < 8 ? (
	                  <Form.Text style={{ color: "red", fontSize: "0.5em" }}>
	                      Your password has to be 8 character long at least
	                  </Form.Text>
	              ) : (
	                      <Form.Text style={{ color: "green", fontSize: "0.5em" }}>
	                          Password is valid
	                      </Form.Text>
	                  )}
	          </Form.Group>
	          <Form.Group controlId="formBasicrole">
	              <Form.Label>Role:</Form.Label>
	              <Form.Control required as="select" name="role" value={this.state.role} onChange={e => this.handleChange(e)}>
	                  <option>Choose role</option>
	                  <option>Manufacturer</option>
	                  <option>Designer</option>
	              </Form.Control>                                            
	          </Form.Group>
	          <input
	              className="btn btn-primary"
	              type="submit"
	              value="Signup"
	          />
	      	</Form>
			</div>
		);
	}
}

export default Signup;