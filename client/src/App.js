import React, { Component } from 'react';
import Signup from './components/auth/SignUp';
import Login from './components/auth/SignIn';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div>
                <h1>This is how it works</h1>
                <BrowserRouter>
                    <Switch>
                        <Route path="/signup" render={() => <Signup />} />
                        <Route path="/login" render={() => <Login />} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;