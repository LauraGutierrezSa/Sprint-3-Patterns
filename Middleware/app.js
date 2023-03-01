const Middleware = require("./middleware.js");
const calculator = require("./calculate.js");

const calculate = new calculator();
const app = new Middleware(calculate);

app.use((req, next) => {
  req.a = req.a ** 2;
  req.b = req.b ** 2;
  next();
});

app.use((req, next) => {
  req.a = req.a ** 3;
  req.b = req.b ** 3;
  next();
});

app.use((req, next) => {
  req.a = req.a / 2;
  req.b = req.b / 2;
  next();
});

console.table([
  ["sum", app.sum({ a: 3, b: 2 })],
  ["substract", app.substract({ a: 3, b: 2 })],
  ["multiply", app.mult({ a: 3, b: 2 })]
]);