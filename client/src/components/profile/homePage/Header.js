import React from 'react';
import './homepage.css'



export default class Header extends React.Component {
  render() {
    return (
        <div className="header-component" style={{height:'800px'}}>
            <h1 className="header-title">The Shoppermint Network</h1>
            <p className="header-small-title">Where upcycling designers shop for fabric</p>
        </div>
    );
  }
}
