import React from 'react';
import './homepage.css'


export default class ChatSection extends React.Component {
  render() {
    return (
        <div className="chatsection">
            <div className="chat-1" style={{height:'800px'}}>
                <div className="container">
                    <h1 className="header-large-title">Chat 1</h1>
                    <p className="header-small-title">description goes here</p>
                </div>
            </div>
            <div className="chat-2" style={{height:'800px'}}>
                <div className="container">
                    <h1 className="header-large-title">Chat 2</h1>
                    <p className="header-small-title">Description</p>
                </div>
            </div>
            <div className="chat-3" style={{height:'800px'}}>
                <div className="container">
                    <h1 className="header-large-title">Chat 3</h1>
                    <p className="header-small-title">Description</p>
                </div>
            </div>
            <div className="chat-4" style={{height:'800px'}}>
                <div className="container">
                    <h1 className="header-large-title">Chat 4</h1>
                    <p className="header-small-title">Description</p>
                </div>
            </div>
        </div>
    );
  }
}
