const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '34\n56\n44\n23\n-2';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ---------------------------------------------------->

lines.map((element) => lines.splice(lines.indexOf(element), 1, parseFloat(element)));

let sum = 0;
let i = 0;

while (lines[i] >= 0) {
  sum += lines[i];
  i += 1;
};

console.log((sum / i).toFixed(2));
