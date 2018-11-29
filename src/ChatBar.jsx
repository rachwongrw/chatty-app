import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ''},
      messages: []
    }
    this.handleNameChange = this.handleNameChange.bind(this);;
  }

  _handleKeyPress = event => { // want the msg to have handlekeypress to send the content to server
    if (event.key === 'Enter') {
      let message = {
        id: '',
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.props.addChatMsg(message); // send message to addChatMsg (in App.jsx)
      event.target.value = ''; // clear input once posted
    }
  }

  handleNameChange (event) {
    console.log('name target value', event.target.value );
    this.setState({ 
      currentUser: {name: event.target.value } 
    });
  }
  render() {
    return (   
      <footer className='chatbar'>
        <input className='chatbar-username' type= 'text' placeholder='Your Name (Optional)' defaultValue={this.props.username} name='name' onChange= {this.handleNameChange} />
        <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue={this.state.messages} name='messages' onKeyPress= { this._handleKeyPress }/>
      </footer>
    )
  }
}

export default ChatBar;