const fs = require('fs');
const { leer, registrar, eliminar } = require('./operaciones');

const operacion = process.argv[2];

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = process.argv.slice(3);
  registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === 'leer') {
  leer();
}

if (operacion === 'eliminar') {
  const nombre = process.argv[3];
  eliminar(nombre);
}