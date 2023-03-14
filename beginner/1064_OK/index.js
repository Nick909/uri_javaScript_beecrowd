const fs = require('fs');

const dirDev = './dev';
const file = '7\n-5\n\n6\n-3.4\n4.6\n12';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

let cont = 0;
let sum = 0;

// eslint-disable-next-line array-callback-return
lines.map((e) => {
  if (e > 0) {
    cont += 1;
    sum += parseFloat(e);
  }
});

console.log(`${cont} valores positivos`);
console.log((sum / cont).toFixed(1));
