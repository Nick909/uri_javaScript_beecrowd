const fs = require('fs');

const dirDev = './dev';
const file = '7 14 106';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------------------------------------------------

function maiorAB(A, B) {
  return ((A + B + Math.abs(A - B)) / 2);
}

const valor = lines.shift().split(' ');

const A = parseInt(valor.shift(), 10);
const B = parseInt(valor.shift(), 10);
const C = parseInt(valor.shift(), 10);

console.log(`${maiorAB(maiorAB(A, B), C)} eh o maior`);
