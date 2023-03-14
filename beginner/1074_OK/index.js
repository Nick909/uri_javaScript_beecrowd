/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = './dev';
const file = '4\n-5\n0\n3\n-4';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const value = parseInt(lines.shift(), 10);

function oddOrEven(value2, str) {
  (value2 % 2 === 0) ? console.log(`EVEN ${str}`) : console.log(`ODD ${str}`);
}

for (let i = 0; i < value; i += 1) {
  if (lines[i] < 0) {
    oddOrEven(lines[i] * -1, 'NEGATIVE');
  } else if (lines[i] > 0) {
    oddOrEven(lines[i], 'POSITIVE');
  } else {
    console.log('NULL');
  }
}

// lines.shift();
// let num = 0;

// function oddOrEven (value, str) {
//   (value % 2 === 0)   ? console.log(`EVEN ${str}`) : console.log(`ODD ${str}`);

// }

// lines.map( e => {
//   num = parseInt(e);

//   if (num < 0) {
//     oddOrEven(num * -1, 'NEGATIVE');

//   } else if (num > 0) {
//     oddOrEven(num, 'POSITIVE');

//   } else  {
//     console.log('NULL');

//   }
// });
