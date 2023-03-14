const fs = require('fs');

const dirDev = './dev';
const file = '10\n85';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');
console.log(lines);

//-----------------------------------------------------------------------------

const timeSpent = parseFloat(lines.shift());
const averageSpeed = parseFloat(lines.shift());

console.log(((timeSpent * averageSpeed) / 12).toFixed(3));
