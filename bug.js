const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({message: 'Hello, World!'}));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon bug: Server crashes when receiving large requests
//This might happen if the request body is too large and the server does not handle it properly. The solution involves setting limits for the request body size.
