const fs = require('fs');

const dirDev = './dev';
const file = '140';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');

// ---------------------------------------------------------------->

const lines = parseInt(input.split(' ').shift(), 10);
const num = 10;

for (let index = 1; index <= num; index += 1) {
  console.log(`${index} x ${lines} = ${index * lines}`);
}
