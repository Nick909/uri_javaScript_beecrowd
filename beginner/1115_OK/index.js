const fs = require('fs');

const dirDev = './dev';
const file = '2 2\n3 -2\n-8 -1\n-7 10\n2\n2 2\n3 -2';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

for (let index = 0; index < lines.length; index += 1) {
  const element = lines[index].split(' ');

  if (element[0] > 0 && element[1] > 0) console.log('primeiro');
  else if (element[0] < 0 && element[1] > 0) console.log('segundo');
  else if (element[0] < 0 && element[1] < 0) console.log('terceiro');
  else if (element[0] > 0 && element[1] < 0) console.log('quarto');
  else break;
}
