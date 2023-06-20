//const express = require('express')
//const app = express()
//app.get('/',(req,res)=>res.json({message: 'Hello love'}))
//app.listen(process.env.PORT || 80)

const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200,{"Content-Type":"text/plain}"});
    response.end("Hello world! It's Tulasi");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);