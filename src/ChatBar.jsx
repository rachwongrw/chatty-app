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

  _handleKeyPress = event => {
    if (event.key === 'Enter') {
      let message = {
        id: '', // id to be assigned once it's sent to the server
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.props.addChatMsg(message); // send message to addChatMsg (in App.jsx)
      event.target.value = ''; // clear input once posted
    }
  }

  handleNameChange (event) {
    this.setState({ 
      currentUser: {name: event.target.value } 
    });
  }
  render() {
    return (   
      <footer className='chatbar'>
        <input className='chatbar-username' type= 'text' placeholder='Your Name (Optional)' defaultValue={this.props.username} name='name' onChange= {this.handleNameChange} />
        <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='messages' onKeyPress= { this._handleKeyPress }/>
      </footer>
    )
  }
}

export default ChatBar;


/* 

defaultValues are needed in the input field. This will hold the value until it gets changed. for the name, we've set it to props.username.
handleKeyPress is for when we want to send the message provided in the input to the server along with the 'set' username. 
*/
