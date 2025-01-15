//let username = "julienne";
//console.log (username);
const fs = require('fs');
const path = require('path');
const { urlencoded } = require('body-parser');
const express = require('express');

const server = express();


server.use(express.urlencoded({extended: false}))

server.get('/currentTime', function(req, res){
    res.send('<h1>' + new Date().toISOString()  + '<h1>');
})

server.get('/', function(req, res){
    res.send('<form action="/store-user" method="POST"><label>Your Name<label><input type ="text" name="username"><button>Submit<button><form>');
})

server.post('/store-user', function(req, res){
    const userName= req.body.username;
    const filepath = path.join(__dirname, 'data', 'users.json')
    fs.writeFileSync(filepath)
    res.send('<h1>Username stored!</h1>');
});

server.listen(3000)

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
