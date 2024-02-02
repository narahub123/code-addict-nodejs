// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names"); // always starts with dot
const sayHi = require("./05-utils");
const data = require("./06-alternative");

console.log(data);
sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);
