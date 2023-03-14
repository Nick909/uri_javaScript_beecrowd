const fs = require('fs');

const dirDev = './dev';
const file = '16 2';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const hourOne = parseInt(lines.shift(), 10);
const hourTwo = parseInt(lines.shift(), 10);
let time;

if (hourOne < hourTwo) {
  time = hourTwo - hourOne;
} else {
  time = (24 - hourOne) + hourTwo;
}

console.log(`O JOGO DUROU ${time} HORA(S)`);
