const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '3\n1\n20';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ------------------------------------------------------------->

const x = parseInt(lines.shift(), 10);
let z = 0;
let l = 0;
let cont = 1;
let aux = 0;

do {
  z = lines[l += 1];
} while (z <= x);

aux = x;
l = x;

do {
  l += 1;
  aux += l;
  cont += 1;
} while (aux <= z);

console.log(cont);
