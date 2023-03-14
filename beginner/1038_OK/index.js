const fs = require('fs');

const dirDev = './dev';
const file = '5 5';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');// replace the '\n' with ' '

// ---------------------------------------------------------------->

const x = parseInt(lines.shift(), 10);
const y = lines.shift();

function sum(valuee, yy) {
  const yyy = yy;
  const value = valuee * yyy;
  console.log(`Total: R$ ${parseFloat(value).toFixed(2)}`);
}

if (x === 1) {
  sum(4, y);
} else if (x === 2) {
  sum(4.50, y);
} else if (x === 3) {
  sum(5, y);
} else if (x === 4) {
  sum(2, y);
} else if (x === 5) {
  sum(1.50, y);
}
