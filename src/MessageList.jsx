import React, { Component } from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
  return (   
    <div>
      <main className='messages'>
        {
          this.props.messages.map((eachMessage, index) => {
            return <Message messageFromList = {eachMessage} type = {eachMessage.type} key={index}/>
          })
        }
      </main>
    </div>
    );
  }
}
export default MessageList;
