const fs = require('fs');

const dirDev = '/dev';
const dirStdin = '/stdin';

const file = '2.00';

// eslint-disable-next-line no-unused-expressions
(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

// eslint-disable-next-line no-unused-expressions
(!fs.existsSync(`.${dirDev + dirStdin}`)) ? fs.mkdirSync(`.${dirDev + dirStdin}`) : null;

fs.writeFileSync(`.${dirDev + dirStdin}/index.txt`, file, (err) => {
  console.log(err);
});

const input = require('fs').readFileSync('./dev/stdin/index.txt', 'utf8');

const lines = input.split('\n');

//-----------------------------------

const R = parseFloat(lines.shift());
const n = 3.14159;
const A = n * R ** 2;

console.log(`A=${A.toFixed(4)}`);
