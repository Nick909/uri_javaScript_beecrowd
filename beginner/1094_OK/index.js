const fs = require('fs');

const dirDev = './dev';
const file = '10\n10 C\n6 R\n15 S\n5 C\n14 R\n9 C\n6 R\n8 S\n5 C\n14 R';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const num = parseInt(lines.shift(), 10);
let sumC = 0;
let sumR = 0;
let sumS = 0;
let total = 0;

for (let i = 0; i < num; i += 1) {
  if (lines[i].includes('C')) {
    sumC += parseInt(lines[i].split(' ').shift(), 10);
  } else if (lines[i].includes('R')) {
    sumR += parseInt(lines[i].split(' ').shift(), 10);
  } else if (lines[i].includes('S')) {
    sumS += parseInt(lines[i].split(' ').shift(), 10);
  }
}

total = sumC + sumR + sumS;

const calcPercent = (part, fullValue) => (part / fullValue) * 100;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${sumC}`);
console.log(`Total de ratos: ${sumR}`);
console.log(`Total de sapos: ${sumS}`);
console.log(`Percentual de coelhos: ${calcPercent(sumC, total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${calcPercent(sumR, total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${calcPercent(sumS, total).toFixed(2)} %`);
