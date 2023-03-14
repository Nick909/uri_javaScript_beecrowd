const fs = require('fs');

const dirDev = './dev';
const file = '4520.00';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const salary = parseFloat(lines.shift());
let result;
let f1;
let f2;
let f3;

if (salary <= 2000) {
  console.log('Isento');
} else if (salary <= 3000) {
  f1 = salary - 2000;
  f1 = ((f1 * 8) / 100);
  result = f1;
} else if (salary <= 4500) {
  f1 = salary - 2000;
  f2 = f1 - 1000;
  f1 -= f2;
  f1 = ((f1 * 8) / 100);
  f2 = ((f2 * 18) / 100);
  result = f2 + f1;
} else {
  f1 = salary - 2000;
  f2 = f1 - 1000;
  f3 = f2 - 1500;
  f1 -= f2;
  f2 -= f3;
  f1 = ((f1 * 8) / 100);
  f2 = ((f2 * 18) / 100);
  f3 = ((f3 * 28) / 100);
  result = f3 + f2 + f1;
}

if (result) {
  console.log(`R$ ${result.toFixed(2)}`);
}
