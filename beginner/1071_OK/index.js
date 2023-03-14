/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = './dev';
const file = '6\n-5';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const x = parseInt(lines.shift(), 10);
const y = parseInt(lines.shift(), 10);

let cont = 0;

if (y < x) {
  for (let i = y + 1; i < x; i += 1) {
    (i % 2 !== 0) ? cont += i : null;
  }
} else {
  for (let i = x + 1; i < y; i += 1) {
    (i % 2 !== 0) ? cont += i : null;
  }
}

console.log(cont);

// let cont = 0;

// function sum (a, b, c) {
//   if(b <= a) {
//     (b % 2 === 1) ? c=+b : null;
//     return sum(a, ++b, c);

//   }

//   return c;

// }

// console.log(sum(x, y, cont));
