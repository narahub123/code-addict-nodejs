// Globals
// global variables : anywhere in an application, you can access them

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// setInterval(() => {
//   console.log("hello world");
// }, 1000);

// file명을 제외한 절대 경로
const filename = __filename;
// file명을 포함한 절대 경로
const dirname = __dirname;
// 현재 작업 경로
const process_cwd = process.cwd();

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
