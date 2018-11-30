import React, { Component } from 'react';


class NavBar extends Component {
  render() {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>Holy Guac <small>Chat Room</small></a>
      <span className='users'>
        {this.props.numberOfUsers} users online
      </span>
    </nav>
    );
  }
}


export default NavBar;