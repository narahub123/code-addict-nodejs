const EventEmitter = require("events");

// create instance from event module
const customEmitter = new EventEmitter();

// on - listen for an event
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// emit - emit an event
customEmitter.emit("response", "john", 34);
