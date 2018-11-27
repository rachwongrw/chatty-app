import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          id: 1
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id: 2
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Message messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser.name} /> {/* passing a prop to a child element */}
      </div>
    );
  }
}
export default App;
