// access to http module
const http = require("http");

// create a server
// the callback which is gonna be invoked every time
// user hit the home page
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  // in every response we should always have end
  // which is gonna signal that the communication is over
  res.end("home page");
});

// set up a port
server.listen(5000);

// thisis it
