/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = './dev';
const file = '4\n14\n\n123\n10\n-25';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const n = parseInt(lines.shift(), 10);
let contPlus = 0;
let contLess = 0;

for (let i = 0; i < n; i += 1) {
  (lines[i] >= 10 && lines[i] <= 20) ? contPlus += 1 : contLess += 1;
}

console.log(`${contPlus} in`);
console.log(`${contLess} out`);
