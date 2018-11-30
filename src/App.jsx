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
      messages: []
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
    console.log('what is this? - app.jsx', oldUser, newUser);
    let notificationItem = {
      type: 'postNotification',
      name: oldUser,
      content: `${oldUser} has changed their name to ${newUser}`
    }
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
    
    // const that = this; // to help access the this.setState function inside another function

    this.socket.onmessage = function(event) {
      let message = JSON.parse(event.data);
      console.log('what is the whole message (from App.jsx):', message);
      console.log('Incoming Message (from App.jsx):', message.content);
      const _msgs = [...this.state.messages, message];
      this.setState({messages: _msgs});
      // const _msgs = this.state.messages.concat([message]);
      // switch(message.type) {
      //   case 'incomingMessage':
      //     console.log('is my switch case even working?');
      //     const _msgs = [...this.state.messages, message];
      //     console.log('what are my messages now? - switch case:', _msgs)
      //     this.setState({messages: _msgs});
      //     break;
      //   case 'incomingNotification':
      //     const notification = [...this.state.messages, message];
      //     console.log('is my notifications working? - switch case:', notification)
      //     this.setState({messages: notification});
      //     break;
      //   default:
      //     console.log('Unknown event type (from App.jsx) ' + message.type);
      // }
      console.log('what is the state of msgs now (from App.jsx):', this.state.messages);
    }.bind(this); // helps to refer to 'this' inside another function and not refer to the inner 'this'

    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   const newMessage = {type: 'incomingMessage', id: 3, username: 'Michelle', content: 'Hello there!'};
    //   const messages = this.state.messages.concat(newMessage)
    //   this.setState({messages: messages})
    // }, 3000);
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser} addChatMsg={this.addChatMsg} addNameChange={this.addNameChange} />
      </div>
    );
  }
}
export default App;
