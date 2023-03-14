const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '4\n11\n0';
const utfEight = 'utf-8';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, utfEight);

const input = fs.readFileSync(path, utfEight);
const lines = input.split('\n');

// ------------------------------------------------->

let x = 1;
let index = 0;
let aux = 0;
let sum = 0;

do {
  x = parseInt(lines[index], 10);
  index += 1;
  aux = (x % 2 === 0) ? x : x + 1;
  for (let i = 0; i < 5; i += 1) {
    sum += aux;
    aux += 2;
  }
  console.log(sum);
  sum = 0;
} while (parseInt(lines[index], 10) !== 0);
