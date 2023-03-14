const fs = require('fs');

const dirDev = './dev';
const file = '3 45';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const a = parseInt(lines.shift(), 10);
const b = parseInt(lines.shift(), 10);

console.log(
  (b % a === 0 || a % b === 0)
    ? 'Sao Multiplos' : 'Nao sao Multiplos',
);
