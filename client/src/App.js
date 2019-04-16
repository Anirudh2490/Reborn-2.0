import React, { Component } from "react";
import NavBar from './components/navbar/Navbar'
import Home from './components/profile/homePage/Home'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";


class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path='/'component={Home} />
              {/* <Route path='/project/:id' component={ProjectDetails} /> */}
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              {/* <Route path='/create' component={CreateProject} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }

export default App;