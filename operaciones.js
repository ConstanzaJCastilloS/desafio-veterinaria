const fs = require('fs');

const leer = () => {
  const data = fs.readFileSync('citas.json', 'utf-8');
  const citas = JSON.parse(data);
  console.log(citas);
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const data = fs.readFileSync('citas.json', 'utf-8');
  const citas = JSON.parse(data);

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  citas.push(nuevaCita);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
};

const eliminar = (nombre) => {
  const data = fs.readFileSync('citas.json', 'utf-8');
  let citas = JSON.parse(data);

  citas = citas.filter(cita => cita.nombre !== nombre);

  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
};

module.exports = { leer, registrar, eliminar };