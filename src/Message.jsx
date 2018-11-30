/* eslint-disable no-console */
import React, { Component } from 'react';

// function notificationType(user) {
//   console.log("props!!!!!", user);
//   return (
//     <div className='notification'>
//       <span className='notification-content message system'>Anonymous1 changed their name to nomnom.</span>
//     </div>
//   )
// }

// function messageType(user) {
//   console.log('messages!!!!!', user)
//   return (
//     <div className='message' key={user.id}>
//         <span className='message-username'>{user.username}</span>
//         <span className='message-content'>{user.content}</span>
//       </div>
//   )
// }

class Message extends Component {
  // notificationType(props) {
  //   console.log('props!!!!!', props);
  //   return (
  //     <div className='notification'>
  //       <span className='notification-content message system'>Anonymous1 changed their name to nomnom.</span>
  //     </div>
  //   )
  // }

  // messageType(props) {
  //   console.log('messages!!!!!', props)
  //   return (
  //     <div className='message' /*key={user.id}*/>
  //       <span className='message-username'>{props.messages.user.username}</span>
  //       <span className='message-content'>{props.messages.user.content}</span>
  //     </div>
  //   )
  // }
  render() {
    if (this.props.messageFromList.type === 'incomingNotification') {
      return (
        <div className='notification'>
          <span className='notification-content message system'>{this.props.messageFromList.content}</span>
        </div>
      )
    }
    if (this.props.messageFromList.type === 'incomingMessage') {
      return (
        <div className='message' key={this.props.messageFromList.key}>
          <span className='message-username'>{this.props.messageFromList.name}</span>
          <span className='message-content'>{this.props.messageFromList.content}</span>
        </div>
      )
    }
    // const messages = this.props.messages;
    // console.log('messages from Message.jsx', messages);
    // const messageItems = messages.map((user) =>
    //   user.type === 'incomingNotification' ? this.notificationType : this.messageType
    // );
  return (   
    <div>
      {messageItems}
    </div>
    );
  }
}


export default Message;

/* 

class Message extends Component {
  
  // const messageNotification = 
  render() {
    const messages = this.props.messages;
    console.log('messages from Message.jsx', messages);
    const messageItems = messages.map((user) =>
      <div className='message' key={user.id}>
        <span className='message-username'>{user.username}</span>
        <span className='message-content'>{user.content}</span>
      </div>
    );
  return (   
    <div>
      {messageItems}
      <div className='notification'>
        <span className='notification-content message system'>Anonymous1 changed their name to nomnom.</span>
      </div>
    </div>
    );
  }
}

*/
