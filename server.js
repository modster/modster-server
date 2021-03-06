const http = require('http');
const url = require('url');
const events = require('events');
const fs = require('fs');

// S e r v e r  C o n f i g u r a t i o n
const port = 80;
const hostname = "127.0.0.1";

// S e r v e r
const server = http.createServer((req, res) => {
  // G r a b  R e q u e s t  H e a d e r s,  M e t h o d,  a n d  U r l
  const { headers, method, url } = req;
  let body = [];
  
  req.on('error', (err) => {
    console.error(err);
  // R e a d  S t r e a m 
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    // C o n v e r t   M e s s a g e  to  S t r i n g
    body = Buffer.concat(body).toString();

    // C o m i n g  S o o n
      // switch




    res.statusCode = 200;
    res.end();
  });
});

// L i s t e n e r 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;