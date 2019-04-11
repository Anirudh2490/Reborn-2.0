import React from 'react';
import './homepage.css';
import { Chat } from '@progress/kendo-react-conversational-ui';
import '@progress/kendo-theme-default/dist/all.css';
import SignIn from '../../auth/SignIn'



export default class ChatSection extends React.Component {
    user = {
        id: this.props.id,
        email: this.props.email,
        phonenumber: this.props.phonenumber,
        isAUser: this.props.isAUser // true or false boolean
    }

    bot = { id:0 }

    state = {
        messages: [
            {
                author: this.bot,
                suggestedActions: [
                    {
                        type: 'reply',
                        value: 'Yes,it\'s my first time!'
                    }, {
                        type: 'reply',
                        value: 'No, I\'ve been here before!'
                    }
                ],
                timestamp: new Date(),
                text: "Hi! Is this your first time visiting Shoppermint?"
            }
        ]
    }

    addNewMessage = (event) => {
        let botResponce = Object.assign({}, event.message);
        botResponce.text = this.countReplayLength(event.message.text);
        botResponce.author = this.bot;
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                event.message
            ]
        }));
        setTimeout(() => {
            this.setState(prevState => ({
                messages: [
                    ...prevState.messages,
                    botResponce
                ]
            }));
        }, 1000);
    };

    countReplayLength = (question) => {
        let length = question.length;
        let answer = question + " contains exactly " + length + " symbols.";
        return answer;
    }
    
  render() {
    return (
        <div className="chatsection">
            <div className="chat-1" style={{height:'800px'}}>
                <div className="container">
                    <h1 className="header-large-title">Chat 1</h1>
                    <SignIn />
                    <Chat user={this.user}
                        messages={this.state.messages}
                        onMessageSend={this.addNewMessage}
                        placeholder={"Type a message..."}
                        width={400}>
                    </Chat>   

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
