import React, { Component } from 'react';

class ChatBar extends Component {
  _handleKeyPress = event => {
    if (event.key === 'Enter') {
      let message = {
        id: 5,
        username: this.props.user.currentUser.name, // good ol' Bob
        content: event.target.value
      };
      this.props.addChatMsg(message); // send message to addChatMsg (in App.jsx)
      event.target.value = ''; // clear input once posted
    }
  }
  render() {
    return (   
      <footer className='chatbar'>
        <input className='chatbar-username' placeholder='Your Name (Optional)' defaultValue=''/>
        <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='message' onKeyPress= { this._handleKeyPress }/>
      </footer>
      )
  }
}

export default ChatBar;