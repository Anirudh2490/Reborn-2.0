import React, { Component } from 'react'
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export class UserChecker extends Component {
  state={
    email:"",
    phone:"",
    isAUser: false,
    formSuccess: false
  };

render() {
        return (
            <div className="row example-wrapper">
                <div className="col-xs-12 col-sm-6 example-col">
                    <div className="card">
                        <div className="card-block">
                            <form className="k-form" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <legend> Start chatting </legend>
                                    <label className="k-form-field">
                                        <span>Email</span>
                                        <Input
                                            name="email"
                                            type="email"
                                            required={true}
                                        />
                                    </label>
                                </fieldset>
                                <label className="k-form-field">
                                        <span>Phone Number</span>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={ this.state.phone }
                                            onChange={ phone => this.setState({ phone }) } />
                                    </label>
                                <Button className="mt-3" type="submit" primary={true}>Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.formSuccess && (
                    <div
                        className="alert alert-formSuccess"
                        style={{ position: 'absolute' }}
                    >
                        Form submitted!
                    </div>)}
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          email:this.state.email,
          phone: this.state.phone, 
          isAUser: this.checkStatus(this.state.email, this.state.password),
          formSuccess: true})
        setTimeout(() => {
 this.setState({ formSuccess: false });
}, 3000);
    }

    checkStatus = (email, phone) => {
      // Function that checks if email and phone number is existing in DB.
      // If existing, then setState({isAUser:true})
      return false
    }

    
}


export default UserChecker;
