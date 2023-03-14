const fs = require('fs');

const dirDev = './dev';
const file = '7\n4 5\n13 10\n6 4\n3 3\n3 5\n3 4\n3 8';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const num = parseInt(lines.shift(), 10);
let getNumberOfLines;

function SumOfConsecutiveOddNumbers(xis, ys) {
  let aux = 0;
  let x = xis;
  let y = ys;

  let sum = 0;

  if (x > y) {
    aux = y;
    y = x;
    x = aux;
  }

  for (let i = x + 1; i < y; i += 1) {
    if (i % 2 !== 0) sum += i;
  }

  console.log(sum);
}

for (let i = 0; i < num; i += 1) {
  getNumberOfLines = lines[i].split(' ');
  SumOfConsecutiveOddNumbers(parseInt(getNumberOfLines[0], 10), parseInt(getNumberOfLines[1], 10));
}
