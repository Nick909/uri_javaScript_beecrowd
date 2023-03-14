const fs = require('fs');

const dir = './dev';
const file = '8\n1\n7\n4\n2\n3';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/text.txt`, file, 'utf-8');
const input = fs.readFileSync(`${dir}/text.txt`, 'utf-8');

const lines = input.split('\n');

// ---------------------------------------------------------------->

let contA = 0;
let contB = 0;
let contC = 0;
let aux = '';
let i = 0;

do {
  aux = lines[i];
  i += 1;
  if (aux === '1') contA += 1;
  else if (aux === '2') contB += 1;
  else if (aux === '3') contC += 1;

  if (i > lines.length) aux = '4';
} while (aux !== '4');

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${contA}`);
console.log(`Gasolina: ${contB}`);
console.log(`Diesel: ${contC}`);
