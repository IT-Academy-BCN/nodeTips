const Middleware = require("./Middleware");

class Maths {
  add({a, b}) {
    return a + b;
  }
  subtract({a, b}) {
    return a - b;
  }
  multiply({a, b}) {
    return a * b;
  }
}

const calculator = new Maths();
//seteo de clase target en Middleware Manager
const app = new Middleware(calculator);

//registro de middlewares en el Manager: el primer operando será multiplicado por 2 (pasamos function de middleware)
app.use((req, next) => {
  req.a = req.a * 2;
  next();
});

//el 2º operando será multiplicado por 3
app.use((req, next) => {
  req.b = req.b * 3;
  next();
});

//uso de clase target (OJO que se invoca el método de la clase target llamando al Manager -que no tiene explícitamente declarado el método-)
console.log(app.add({a: 5, b: 10}));
console.log(app.subtract({a: 10, b: 6}));
console.log(app.multiply({a: 2, b: 3}));
