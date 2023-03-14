const fs = require('fs');

const dirDev = './dev';
const file = '8';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

let num = parseInt(lines.shift(), 10);

for (let i = 0; i < 12; i += 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num += 1;
}
