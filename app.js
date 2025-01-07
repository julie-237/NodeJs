//let username = "julienne";
//console.log (username);
const express = require('express');

const app = express()

app.get("/currentTime", function(req, res){
    res.send('<h1>' + new Date().toISOString()  + '<h1>');
})

app.get("/", function(req, res){
    res.send('<h1>Hello World!<h1>');
})

app.listen(3000)

/* function handleRequest(request, response) {
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

server.listen(3000); */
//amazon.com => Send a request to Amazon's server
// amazon.com:443 or 80
