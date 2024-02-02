const EventEmitter = require("events");

// create instance from event module
const customEmitter = new EventEmitter();

// on - listen for an event
customEmitter.on("response", () => {
  console.log(`data received `);
});

// emit - emit an event
customEmitter.emit("response");
