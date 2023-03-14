/* eslint-disable no-return-assign */
const fs = require('fs');

const dirDev = './dev';
const file = '7\n-5\n\n6\n-3.4\n4.6\n12';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

let cont = 0;
lines.map((e) => ((e > 0) ? cont += 1 : null));
console.log(`${cont} valores positivos`);
