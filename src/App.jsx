/* eslint-disable no-console */
import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: [],
      online: 0
    }
    this.addChatMsg = this.addChatMsg.bind(this);
    this.addNameChange = this.addNameChange.bind(this);
  }
  
  addChatMsg(user, message) {
    let messageItem = {
      type: 'postMessage',
      name: user,
      content: message
    }
    // Sending the message to the server (to see on client side console)
    this.socket.send(JSON.stringify(messageItem));
  }

  addNameChange(oldUser, newUser) {
    let notificationItem = {
      type: 'postNotification',
      name: oldUser,
      content: `${oldUser} has changed their name to ${newUser}`
    }
    // Sending the message to the server (to see on client side console)
    this.socket.send(JSON.stringify(notificationItem));
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    // Connecting to WebSocket server  
    this.socket = new WebSocket('ws://0.0.0.0:3001');

    this.socket.onopen = function() {
      console.log('Connected to Server');
    }
    // Socket error handling
    this.socket.onerror = function(error) {
      console.log('WebSocket Error: ' + error);
    };

    this.socket.onmessage = function(event) {
      let message = JSON.parse(event.data);
     if (message.type === 'ClientInfo') {
       this.setState({online: Number(message.content)})
     } else {
      console.log('Incoming Message: ', message.content);
      const _msgs = [...this.state.messages, message];
      this.setState({messages: _msgs});
     }
    }.bind(this);
  }

  render() {
    return (
      <div>
        <NavBar numberOfUsers = {this.state.online}/>
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser} addChatMsg={this.addChatMsg} addNameChange={this.addNameChange} />
      </div>
    );
  }
}
export default App;
