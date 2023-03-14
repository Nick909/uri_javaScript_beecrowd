const fs = require('fs');

const dirDev = './dev';
const file = '6';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const n = parseInt(lines.shift(), 10);

for (let i = 2; i <= n; i += 2) {
  console.log(`${i}^2 = ${i ** 2}`);
}
