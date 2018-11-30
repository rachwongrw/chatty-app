/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      messages: []
    }
  }
  render() {
    const updateName = (event) => {
      const oldUser = this.state.name;
      const newUser = event.target.value;
      if (oldUser !== newUser) {
        this.props.addNameChange(oldUser, newUser);
        this.setState({ name: newUser });
      }
    }

    const _handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        const user = this.state.name;
        const message = event.target.value;
        this.props.addChatMsg(user, message);
        event.target.value = '';
      }
    }
    return (   
      <footer className='chatbar'>
        <input className='chatbar-username' type= 'text' placeholder={this.props.currentUser.name} name='name' onBlur={updateName}/>
        <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='messages' onKeyPress= {_handleKeyPress }/>
      </footer>
    )
  }
}

export default ChatBar;
