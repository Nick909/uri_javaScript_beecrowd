/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '5\n6\n7\n8';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;
(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

const A = parseInt(lines.shift(), 10);
const B = parseInt(lines.shift(), 10);
const C = parseInt(lines.shift(), 10);
const D = parseInt(lines.shift(), 10);

const DIFFERENCE = (A * B - C * D);

console.log(`DIFERENCA = ${DIFFERENCE}`);
