const input = require('fs').readFileSync('text.txt', 'utf8');

const lines = input.split('fs');

const x = parseInt(lines.shift(), 10);

for (let odd = 1; odd <= x; odd += 1) {
  if (odd % 2 !== 0) {
    console.log(`${odd}`);
  }
}
