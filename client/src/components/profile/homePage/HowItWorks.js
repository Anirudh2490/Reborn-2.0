import React from 'react';
import './homepage.css'



export default class HowItWorks extends React.Component {
    render() {
      return (
          <div>
              <div className="how-it-works" style={{height:'800px'}}>
                  <div className="container">
                    <h1 className="howitworks-title">How it works</h1>
                    <p className="howitworks-small-title">Description</p>
                  </div>
              </div>
            </div>
      );
    }
  }
