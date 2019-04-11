import React from 'react';
import './homepage.css'



export default class HowItWorks extends React.Component {
    render() {
      return (
          <div>
              <div className="how-it-works-1" style={{height:'800px'}}>
                  <div className="container">
                  </div>
              </div>
              <div className="how-it-works-2" style={{height:'800px'}}>
                  <div className="container">
                      <h1 className="header-large-title">How it works 2</h1>
                      <p className="header-small-title">Description</p>
                  </div>
              </div>
          </div>
      );
    }
  }
