const fs = require('fs');

const dirDev = './dev';
const file = '140';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const num = parseInt(lines.shift(), 10);

for (let i = 1; i <= 10; i += 1) {
  console.log(`${i} x ${num} = ${i * num}`);
}
