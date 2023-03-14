const fs = require('fs');

const dirDev = './dev';
const file = '7';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');
console.log(lines);

//-----------------------------------------------------------------------------

const Y = parseInt(lines.shift(), 10);

console.log(`${Y * 2} minutos`);
