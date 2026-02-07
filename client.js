/*const WebSocket = require('ws');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server');
  ask();
});

ws.binaryType = "blob";
ws.on('message', (msg) => {
  console.log('Server:', msg);
});

ws.on('close', () => {
  console.log('Disconnected');
  process.exit(0);
});

function ask() {
  rl.question('> ', (msg) => {
    if (msg.toLowerCase() === 'exit') {
      ws.close();
      rl.close();
      return;
    }
    ws.send(msg);
    ask();
  });
}*/
