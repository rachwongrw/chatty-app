import React, { Component } from 'react';

class Message extends Component {
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
      <div className='message system'>
        {/* {this.state.messages[1].content} */}
      </div>
    </div>
    );
  }
}

export default Message;
