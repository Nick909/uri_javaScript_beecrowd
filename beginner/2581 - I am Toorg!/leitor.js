var input = require('fs').readFileSync('iAmToorg!.txt', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines.shift());
let text;

for(let i = 0; i < num; i++) {
  text = lines.shift();
  console.log('I am Toorg!')
}

process.exit(0);