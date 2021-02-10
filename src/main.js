require("babel-runtime/regenerator")
require("./main.css");
require("./index.html");

var example = async (args) => {
  const { a, b } = args;
  await console.log("Hello from Nam Phan" + a + ' ' + b);
};

example({
  a: 'April',
  b: '2021'
});