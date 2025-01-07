//let username = "julienne";
//console.log (username);
const http = require('http');

function handleRequest(request, response) {
    if (request.url === '/currentTime') {
        response.statusCode = 200;
        response.end('<h1>' + new Date().toISOString()  + '<h1>');
    }
    else if (request.url === "/") {
        response.statusCode = 200;
        response.end('<h1>Hello World!<h1>');
    }
    
}

const server = http.createServer(handleRequest);

server.listen(3000);
//amazon.com => Send a request to Amazon's server
// amazon.com:443 or 80
