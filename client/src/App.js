import React, { Component } from "react";
import Home from './components/profile/homePage/Home'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// const store = createStore(
//     UserReducer
// )

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div className="App">
                <Switch>
                <Route path='/signin' component={SignIn} />              
                <Route path='/signup' component={SignUp} />
                </Switch>
              {/* <Provider store={store}>   */}
              <Route exact path='/' component={Home} />
              {/* </Provider>, */}
              </div>
            </BrowserRouter>
        );
    }
}

export default App;