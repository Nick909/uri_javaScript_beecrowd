const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '3 -1 0 -2 2';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split(' ');

// ----------------------------------------------------->

const a = parseInt(lines.shift(), 10);
let n = 0;
let sum = 0;
let aux = 0;

while (n <= 0) {
  n = parseInt(lines[aux += 1], 10);
}

for (let i = 0; i < n; i += 1) {
  sum = sum + a + i;
}

console.log(sum);
