const fs = require('fs');

const dirDev = './dev';
const file = '100\n200';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->
let sum = 0;
let min = parseInt(lines[0], 10);
let max = parseInt(lines[1], 10);
let aux;

if (max < min) {
  aux = min;
  min = max;
  max = aux;
}

for (let i = min; i <= max; i += 1) {
  if (!(i % 13 === 0)) {
    sum += i;
  }
}

console.log(sum);
