import React from 'react';
import './homepage.css'
import '@progress/kendo-theme-default/dist/all.css';


export default class HowItWorks extends React.Component {

    render() {
      return (
          <div>
              <div className="how-it-works" style={{height:'800px'}}>
                  <div className="container">
                    <h1 className="howitworks-title">How It Works</h1>
                    <p className="howitworks-small-title"> I am a </p>
                  </div>
              </div>
            </div>
      );
    }
  }
