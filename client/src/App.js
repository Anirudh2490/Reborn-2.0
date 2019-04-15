import React, { Component } from "react";
// import AuthService from "./auth-service";
// import { ApiAiClient } from 'api-ai-javascript';
import Home from './components/profile/homePage/Home'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';


import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// const store = createStore(
//     UserReducer
// )

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", phonenumber: "", isAuthenticated: false, messaged:[], error: false };
        // this.service = new AuthService();
        // this.client = new ApiAiClient({
        //     accessToken: '7d9144b2270246e7ad42ac508f7317bb'
        // });
        // this.client.eventRequest("Welcome").then(this.onResponse, this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const email = this.state.email
        const password = this.state.password;
        this.service
            .login(email  , password)
            .then(response => {
                this.setState({ email: "", password: "" });
                this.props.getUser(response);
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ error: true });
                console.log(error);
            });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <BrowserRouter>
              <div className="App">
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              {/* <Provider store={store}>   */}
                <Home />
              {/* </Provider>, */}
              </div>
            </BrowserRouter>
        );
    }
}

export default App;




// import React, { Component } from "react";
// import AuthService from "./auth-service";
// import { Link, withRouter } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import content from '../../text.json'
// import { Chat, HeroCard } from '@progress/kendo-react-conversational-ui';
// import { Calendar } from '@progress/kendo-react-dateinputs';
// import { ApiAiClient } from 'api-ai-javascript';


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { email: "", phonenumber: "", isAuthenticated: false, messaged:[], error: false };
//         this.service = new AuthService();
//         this.client = new ApiAiClient({
//             accessToken: '7d9144b2270246e7ad42ac508f7317bb'
//         });
//         this.client.eventRequest("Welcome").then(this.onResponse, this);
//     }

//     handleFormSubmit = event => {
//         event.preventDefault();
//         const email = this.state.email
//         const password = this.state.password;
//         this.service
//             .login(email  , password)
//             .then(response => {
//                 this.setState({ email: "", password: "" });
//                 this.props.getUser(response);
//                 this.props.history.push("/");
//             })
//             .catch(error => {
//                 this.setState({ error: true });
//                 console.log(error);
//             });
//     };

//     handleChange = event => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };
//     render() {
//         return (
//             <div className="container login-container">
//                 <div className="row">
//                     <div className="col-4" />
//                     <div className="col-4">

//                         <Form onSubmit={this.handleFormSubmit}>
//                             <Form.Group controlId="formBasicEmail">
//                                 <Form.Control
//                                     size="sm"
//                                     type="email"
//                                     placeholder="Enter email"
//                                     name="email"
//                                     value={this.state.email}
//                                     onChange={e => this.handleChange(e)}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="formBasicPassword">
//                                 <Form.Control
//                                     size="sm"
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={e => this.handleChange(e)}
//                                 />
//                             </Form.Group>
//                             <input className="btn btn-primary" type="submit" value="Login" />
//                         </Form>
//                         <hr />
//                         {this.state.error ? <p className='error-message'>{content.errorMessage.errorMessage}!</p> : ""}
//                     </div>
//                     <div className="col-4" />

//                 </div>
//                 <p className="login-message">
//                     Dont have account? <Link to={"/signup"}> Signup</Link><br />
//                     Forgot your password? ... Sorry about that man
//                 </p>
//             </div>
//         );
//     }
// }

// export default withRouter(App);
