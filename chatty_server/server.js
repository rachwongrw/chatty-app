/* eslint-disable no-console */
const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuidv4 = require('../chatty_server/node_modules/uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`WE'RE LIVE ON... ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

// wss.broadcast = function broadcast(data) {
//   wss.clients.forEach(function each(client) {
//     if (client.readyState === SocketServer.OPEN) {
//       client.send(data);
//     }
//   });
// };
const clients = [];

wss.on('connection', (ws) => {
  console.log('Client connected');
  clients.push(ws);

  // Have server display message in Terminal
  ws.on('message', function incoming(_data) {
    const data = JSON.parse(_data); // need to change this to an object (used stringify on data in App.jsx. cant access variables as listed below if string)
    console.log('what is the data?', data);
    const {type, name, content} = data;
    // console.log(name,content);
    const assignID = {type, id: uuidv4(), name, content}

    switch(assignID.type) {
      case ('postMessage'):
        assignID.type = 'incomingMessage';
        console.log (`${name} said ${content}`);
        break;
      case ('postNotification'):
        assignID.type = 'incomingNotification';
        console.log (content);
        break;
      default:
        console.log('Unknown event type (from server.js) ' + assignID.type);
    }
    console.log('what is the data now?', assignID);

    // console.log('what is SocketServer.OPEN even?????????', WebSocket.OPEN);

    clients.forEach(client => {
      // console.log('is code even reaching here?');
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(assignID));
        // console.log('what about here');
      }
    });
  });
  
 
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
