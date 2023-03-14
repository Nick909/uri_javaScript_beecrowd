const fs = require('fs');

const dirDev = './dev';
const file = '-5\n0\n-3\n-4\n12';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->
lines.map((e) => lines.splice(lines.indexOf(e), 1, parseInt(e, 10)));
let contEven = 0;
let contOdd = 0;
let contPlus = 0;
let contMinus = 0;

// eslint-disable-next-line array-callback-return
lines.map((e) => {
  // eslint-disable-next-line no-unused-expressions
  (e % 2 === 0) ? contEven += 1 : contOdd += 1;
  // eslint-disable-next-line no-unused-expressions
  if (e !== 0) (e > 0) ? contPlus += 1 : contMinus += 1;
});

console.log(`${contEven} valor(es) par(es)`);
console.log(`${contOdd - 1} valor(es) impar(es)`);
console.log(`${contPlus} valor(es) positivo(s)`);
console.log(`${contMinus - 1} valor(es) negativo(s)`);
