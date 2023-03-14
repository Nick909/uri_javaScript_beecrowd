/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '5.0\n7.1';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());

const MEDIA = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
