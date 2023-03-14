const fs = require('fs');

const dirDev = './dev';
const file = '3,0 4,0 5,2';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------------------------------------------------

const valor = lines.shift().split(' ');

const A = parseFloat(valor[0]);
const B = parseFloat(valor[1]);
const C = parseFloat(valor[2]);

console.log(`TRIANGULO: ${parseFloat((A * C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${parseFloat(3.14159 * C ** 2).toFixed(3)}`);
console.log(`TRAPEZIO: ${parseFloat(((A + B) / 2) * C).toFixed(3)}`);
console.log(`QUADRADO: ${parseFloat(B ** 2).toFixed(3)}`);
console.log(`RETANGULO: ${parseFloat(A * B).toFixed(3)}`);
