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
  // clients.push(ws);
  // console.log(wss.clients.size);
  // Have server display message in Terminal
  ws.on('message', function incoming(_data) {
    const data = JSON.parse(_data); // need to change this to an object (used stringify on data in App.jsx. cant access variables as listed below if string)
    console.log('what is the data?', data);
    const {type, name, content} = data;
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

    wss.clients.forEach(client => { // wss- websocket server which is different ws. wss.client... will automatically add clients to the clients array. this affected mgs being rendered to the page
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(assignID));
      }
    });
  });
  
 
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
