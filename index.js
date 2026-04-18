const fs = require('fs');

const leer = () => {
  const data = fs.readFileSync('citas.json', 'utf-8');
  const citas = JSON.parse(data);
  console.log(citas);
};