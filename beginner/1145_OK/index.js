'strict';

const fs = require('fs');

const dirDev = './dev/';
const dirStdin = './dev/stdin/';
const file = '3 99';

if (!fs.existsSync(dirDev))fs.mkdirSync(dirDev);

if (!fs.existsSync(dirStdin)) fs.mkdirSync(dirStdin);

fs.writeFileSync('./dev/stdin/index.txt', file);

const input = require('fs').readFileSync('./dev/stdin/index.txt', 'utf8');

const lines = input.split('\n');

const [x, y] = lines[0].split(' ').map((e) => parseInt(e, 10));
let arr = '';
let cont = 0;

for (let l = 0; l <= y; l += 1) {
  for (let c = 1; c <= x; c += 1) {
    cont += 1;
    if (cont > y) break;
    arr += cont;
    if (c !== x) { arr += ' '; } else arr += '\n';
  }
}
process.stdout.write(arr);
