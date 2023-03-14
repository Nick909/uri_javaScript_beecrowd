const fs = require('fs');

const dirDev = './dev';
const file = '-3,5\n3,5\n11,0\n10,0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->
let sum = 0;
let cont = 0;

for (let i = 0; i < lines.length; i += 1) {
  if (parseFloat(lines[i]) >= 0 && parseFloat(lines[i]) <= 10) {
    sum += parseFloat(lines[i].split(',').join('.'));
    cont += 1;
    if (cont === 2) break;
  } else console.log('nota invalida');
}

console.log(`media = ${(sum / cont).toFixed(2)}`);
