const fs = require('fs');

const dirDev = './dev';
const file = '13';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const num = parseInt(lines.shift(), 10);

for (let i = 0; i < 10000; i += 1) {
  if (i % num === 2) console.log(i);
}
