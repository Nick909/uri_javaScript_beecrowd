const fs = require('fs');

const dirDev = '/dev';
const dirStdin = '/stdin';

const file = '30 \n10';

// eslint-disable-next-line no-unused-expressions
(!fs.existsSync(`./${dirDev}`)) ? fs.mkdirSync(`./${dirDev}`) : null;

// eslint-disable-next-line no-unused-expressions
(!fs.existsSync(`./${dirDev + dirStdin}`)) ? fs.mkdirSync(`./${dirDev + dirStdin}`) : null;

fs.writeFileSync(`./${dirDev + dirStdin}/index.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync('./dev/stdin/index.txt', 'utf8');
const lines = input.split('\n');

//-----------------------------------

const A = parseInt(lines.shift(), 10);
const B = parseInt(lines.shift(), 10);

console.log(`SOMA = ${A + B}`);
