/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      messages: []
    }
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this._handleKeyPress = this._handleKeyPress.bind(this);
    // this.updateName = this.updateName.bind(this);
  }

  // handleNameChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // updateName (event) {
  //   const oldUser = this.state.name;
  //   const newUser = event.target.value;
  //   if (oldUser !== newUser) {
  //     this.props.addNameChange(oldUser, newUser);
  //     this.setState({ currentUser: { name: newUser }});
  //   }
  // }
  

  // _handleKeyPress (event) {
  //   if (event.key === 'Enter') {
  //     const user = this.state.name;
  //     const message = event.target.value;
  //     this.props.addChatMsg(user, message); // send message to addChatMsg (in App.jsx)
  //     event.target.value = ''; // clear input once posted
  //   }
  // }
  render() {
    const updateName = (event) => {
      console.log('what is this name event? - updatename', event.target.value);
      console.log('what is THIS referring to - for name for updatename?', this.state.name);
      const oldUser = this.state.name;
      const newUser = event.target.value;
      if (oldUser !== newUser) {
        this.props.addNameChange(oldUser, newUser);
        this.setState({ name: newUser });
      }
    }

    const _handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('what is this mesg event?', event.target.value);
        console.log('what is THIS referring to - for name?', this.state.name);
        const user = this.state.name;
        const message = event.target.value;
        this.props.addChatMsg(user, message); // send message to addChatMsg (in App.jsx)
        event.target.value = ''; // clear input once posted
      }
    }
    return (   
      <footer className='chatbar'>
        <input className='chatbar-username' type= 'text' placeholder={this.props.currentUser.name} name='name' /*onChange={this.handleNameChange}*/ onBlur={updateName}/>
        <input className='chatbar-message' type= 'text' placeholder='Type a message and hit ENTER' defaultValue='' name='messages' onKeyPress= {_handleKeyPress }/>
      </footer>
    )
  }
}

export default ChatBar;


/* 

defaultValues are needed in the input field. This will hold the value until it gets changed. for the name, we've set it to props.username.
handleKeyPress is for when we want to send the message provided in the input to the server along with the 'set' username. 


------- OLD CODE ------- 

handleNameChange (event) {
    this.setState({ 
      currentUser: { name: event.target.value },
      messages: {
        type: 'postNotification',
        username: this.state.currentUser.name,
        content: ''
      }
    });
  }

  _handleKeyPress = event => {
    if (event.key === 'Enter') {
      let message = {
        type: 'postNotification' ? 'postNotification' : 'postMessage',
        username: this.state.currentUser.name,
        content: event.target.value
      };
      this.props.addChatMsg(message); // send message to addChatMsg (in App.jsx)
      event.target.value = ''; // clear input once posted
    }
  }
*/
