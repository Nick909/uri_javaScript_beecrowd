const fs = require('fs');

const dirDev = './dev';
const file = '1523';

if (fs.existsSync(`${dirDev}`)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (error) => {
  console.log(error);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

const R = parseFloat(lines.shift());
const VOLUME = (4 / 3) * 3.14159 * R ** 3;

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);
