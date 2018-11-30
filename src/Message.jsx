/* eslint-disable no-console */
import React, { Component } from 'react';


class Message extends Component {
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
  return (   
    <div>
      {this.props.messageFromList}
    </div>
    );
  }
}


export default Message;
