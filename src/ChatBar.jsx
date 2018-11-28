import React, { Component } from 'react';

class ChatBar extends Component {
  _handleKeyPress = event => {
    if (event.key === 'Enter') {
      console.log('do validate');
      console.log('props', this.props);
      console.log('what is the user name:', this.props.user.currentUser.name);
      console.log('what are the target elements!!!', event.target.value);
      let message = {
        id: 5,
        username: this.props.user.currentUser.name,
        content: event.target.value
      };
      this.props.addChatMsg(message);
      message.value = '';
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

// function ChatBar({ user, onMessageSend }) {
//   const _handleKeyPress = event => {
//     if (event.key === 'Enter') {
//       console.log('props', {user});
//       console.log('what is the props object:', user.messages);
//       console.log('what is the target?', event.target);
//       console.log('what is the target value!?!', event.target.value);
//       const messageInput = event.target.value;
//       onMessageSend(messageInput);
//       event.target.value = '';
//     }
//   }
//   return (   
//     <footer className='chatbar' onKeyPress= { _handleKeyPress }>
//       <input className='chatbar-username' type='text' placeholder='Your Name (Optional)' defaultValue='' name='username'/>
//       <input className='chatbar-message' type='text' placeholder='Type a message and hit ENTER' defaultValue='' onKeyUp= {this.props.aname='message'/>
//     </footer>
//   );
// }