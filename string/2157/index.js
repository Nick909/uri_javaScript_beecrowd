const fs = require('fs');

const dirDev = './dev';
const file = '3\n1 5\n10 13\n98 101';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const tam = lines.shift();
let separation = [];

function reverses(strg) {
  return strg.split('').reverse().join('');
}

function mirror(a, b) {
  let str = '';

  for (let i = a; i <= b; i += 1) {
    str += i;
  }

  return str + reverses(str);
}

for (let index = 0; index < tam; index += 1) {
  separation = lines[index].split(' ');
  console.log(mirror(parseInt(separation[0], 10), parseInt(separation[1], 10)));
}


(123) * 2 -(123) * 2 (123)
3 4 3 -3 3