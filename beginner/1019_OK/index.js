const fs = require('fs');

const dirDev = './dev';
const file = '140153';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

// --------------------------------------------------------->

let second = parseInt(lines.shift(), 10);
const hour = second / 3600;
const minute = (second % 3600) / 60;
second %= 60;

console.log(
  `${parseInt(hour, 10)}:${
    parseInt(minute, 10)}:${
    parseInt(second, 10)}`,
);
