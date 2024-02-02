// os module
const os = require("os"); // when using built-in module

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  releas: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
