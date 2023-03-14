const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '4';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// --------------------------------------------->

const n = parseInt(lines.shift(), 10);
let aux = n;
let current = n; 

for (let i = 0; i < (n - 1); i += 1) {
  aux -= 1;
  if (aux > 0) current *= aux;
}

console.log(current);
