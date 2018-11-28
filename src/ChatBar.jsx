import React, { Component } from 'react';

function ChatBar({ user, addChatMsg }) {
  const _handleKeyPress = event => {
    if (event.key === 'Enter') {
      console.log('props', {user});
      console.log('addChatMsg', {addChatMsg});
      console.log('what is the user name:', user.currentUser.name);
      console.log('what are is the target value!?!', event.target.value);
      const messageInput = event.target.value;
      addChatMsg(messageInput);
      event.target.value = '';
    }
  }
  return (   
    <footer className='chatbar'>
      <input className='chatbar-username' placeholder='Your Name (Optional)' defaultValue={user.currentUser.name}/>
      <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='message' onKeyPress= { _handleKeyPress }/>
    </footer>
  );
}

export default ChatBar;


// OLD CODE

// class ChatBar extends Component {
//   _handleKeyPress = event => {
//     if (event.key === 'Enter') {
//       console.log('do validate');
//       console.log('props', this.props);
//       console.log('what is the user name:', this.props.user.currentUser.name);
//       console.log('what are the target elements!!!', event.target.elements);
//       const messageInput = event.target.elements.message;
//       this.props.addChatMsg(messageInput.value);
//       messageInput.value = '';
//     }
//   }
//   render() {
//     return (   
//       <footer className='chatbar'>
//         <input className='chatbar-username' placeholder='Your Name (Optional)' defaultValue={this.props.user.currentUser.name}/>
//         <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='message' onKeyPress= { this._handleKeyPress }/>
//       </footer>
//       )
//   }
// }