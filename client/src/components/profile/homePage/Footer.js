import React from 'react';
import './homepage.css'

export default class Footer extends React.Component {
  render() {
    return (
        <div className="header-component" style={{height:'700px'}}>
            <div className="container">
                <h1 className="header-large-title">The Shoppermint Network</h1>
                <p className="header-small-title">Where upcycling designers shop for fabric</p>
            </div>
        </div>
    );
  }
}
