const http = require("http");
const { hostname } = require("os");

const hostName = '127.0.0.1';
const port = 3002;

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World Im doing things')
}) 

server.listen(port, hostName, ()=>{
  console.log(`Server runing at http://${hostname}:${port}`)
})