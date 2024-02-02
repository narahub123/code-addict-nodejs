// path module
const path = require("path");

// show separator
console.log(path.sep); // \

// join all arguments together 
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // \content\subfolder\test.txt

// Return the last portion of a path
const base = path.basename(filePath);
console.log(base); // test.txt

// return the absolute path 
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // D:\coding\nodejs\tutorial\node_tutorial\content\subfolder\test.txt
