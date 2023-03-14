const fs = require('fs');

const dirDev = './dev';
const file = '3\n3 -2\n8 0\n0 -8';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

// eslint-disable-next-line no-unused-vars
const accountNumber = parseInt(lines.shift(), 10);
let line;

for (let i = 0; i < accountNumber; i += 1) {
  line = lines[i].split(' ');

  if (parseFloat(line[1]) === 0) {
    console.log('divisao impossivel');
  } else {
    console.log((parseFloat(line[0]) / parseFloat(line[1])).toFixed(1));
  }
}
