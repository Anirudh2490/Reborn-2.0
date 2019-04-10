import React, { Component } from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { BrowserRouter } from 'react-router-dom';

// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>Work in progress</h1>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;