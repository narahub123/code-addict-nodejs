// issues
// 1. don't have any metadata about the body that we're sending out
// 2. provide the same upon the different address
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" }); // status code, mime type 
  res.write("<h1>home page</h>"); // body
  res.end();
});

server.listen(5000);
