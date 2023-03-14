const fs = require('fs');

const dirDev = './dev';
const file = '7 21 -14';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const ascendingOder = [];
lines.map((e) => ascendingOder.push(parseInt(e, 10)));

ascendingOder.sort((a, b) => a - b).map((e) => console.log(e));
console.log('');
lines.map((line) => (console.log(parseInt(line, 10))));

// ---------------------------- OK -------------------------------->

// let a = parseInt(lines.shift());
// let b = parseInt(lines.shift());
// let c = parseInt(lines.shift());

// let ascendingOder = [];

// ascendingOder.push(a);
// ascendingOder.push(b);
// ascendingOder.push(c);

// ascendingOder.sort((a, b) => a-b).map(e => console.log(e));
// console.log('');

// console.log(a)
// console.log(b)
// console.log(c)
