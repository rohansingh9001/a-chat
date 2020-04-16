import React from 'react';
import logo from './logo.svg';
import './App.css';

import Messages from "./components/Messages";
import Input from "./components/Input";
import Header from "./components/Header";

// A Random colour generator to generate random avatars.
function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends React.Component {
  // State contains a messages array.
  state = {
    messages: [
      // Hard coded the first message as of now.
      {
        text: "This is a test message!",
        member: {
          color: randomColor(),
        }
      }
    ],
    member: {
      color: randomColor()
    }
  }

  // Function to handle a sent message event.
  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
