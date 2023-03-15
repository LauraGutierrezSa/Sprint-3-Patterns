const EventEmitter = require('events');

class Tema extends EventEmitter {
  constructor(nombre) {
    super();
    this.nombre = nombre;
    this.mensajes = [];
  }

  agregarMensaje(mensaje) {
    this.mensajes.push(mensaje);
    this.emit('mensajeNuevo', mensaje, this.nombre);
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  recibirMensaje(mensaje, nombreTema) {
    console.log(`[${this.nombre}] Nuevo mensaje en el tema ${nombreTema}: ${mensaje}`);
  }
}

const tema1 = new Tema('Angular');
const usuario1 = new Usuario('Jordi');

tema1.on('mensajeNuevo', (mensaje, nombreTema) => {
  usuario1.recibirMensaje(mensaje, nombreTema);
});

tema1.agregarMensaje('Hola desde el curso de Angular!');

const tema2 = new Tema('NodeJs');
const usuario3 = new Usuario('Laura');
const usuario4 = new Usuario('Ara');

tema2.on('mensajeNuevo', (mensaje, nombreTema) => {
  usuario3.recibirMensaje(mensaje, nombreTema);
  usuario4.recibirMensaje(mensaje, nombreTema);
});

tema2.agregarMensaje('Hola desde el curso de NodeJs!');