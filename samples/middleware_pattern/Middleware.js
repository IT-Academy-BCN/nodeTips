class Middleware {
  constructor(target) {
    this.target = target;
    this.middlewares = [];
    this.req = {};

/*
    Para obtener las funciones del objeto Target e invocarlas, es necesario crearlas dinámicamente en el Manager importándolas.
    Para ello:
      -   Se obtiene el prototype del objeto target
      -   Se crea la función dinámicamente (que no sea el constructor)
      -   Posteriormente se mapean los valores de entrada al Manager con los parámetros necesarios en cada invocación
*/
    const prototype = Object.getPrototypeOf(this.target);
    Object.getOwnPropertyNames(prototype).forEach(fn => {
      if (fn !== "constructor") return this.createFn(fn);
    });
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  executeMiddleware(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () =>
        this.executeMiddleware(i + 1)
      );
    }
  }
  createFn(fn) {
    this[fn] = args => {
      this.req = args;
      this.executeMiddleware();
      return this.target[fn].call(this, this.req);
    };
  }
}

module.exports = Middleware;
