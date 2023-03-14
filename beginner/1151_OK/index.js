const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '5';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ------------------------------------------------------->

const n = parseInt(lines.shift(), 10);
let before = 0;
let aux = 0;
let current = 0;

for (let i = 0; i < n; i += 1) {
  process.stdout.write(`${(current).toString()}`);
  aux = before;
  before = current;
  current += aux;

  if (i < n - 1) process.stdout.write(' ');
  if (current === 0) current = 1;
}

console.log();
