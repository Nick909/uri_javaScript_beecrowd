const input = require('fs').readFileSync('./input.txt', 'utf8');

const lines = input.split('\n');

//-----------------------------------

const numUm = parseInt(lines.shift(), 10);
const numDois = parseInt(lines.shift(), 10);

console.log(`X = ${numUm + numDois}`);
