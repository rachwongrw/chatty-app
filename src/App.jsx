import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?'
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }
  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser.name} /> {/* passing a prop to a child element */}
      </div>
    );
  }
}
export default App;
