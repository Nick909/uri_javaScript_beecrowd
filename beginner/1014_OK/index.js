const fs = require('fs');

const dirDev = './dev';
const file = '500\n35.0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (e) => {
  console.log(e);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------------------------------------------------

const X = parseInt(lines.shift(), 10);
const Y = parseFloat(lines.shift());

console.log(`${(X / Y).toFixed(3)} km/l`);
