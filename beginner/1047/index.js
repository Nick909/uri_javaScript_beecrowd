const fs = require('fs');

const dirDev = './dev';
const file = '7 8 9 10';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

// let hourOne   = parseInt(lines.shift());
// let minuteOne = parseInt(lines.shift());
// let hourTwo   = parseInt(lines.shift());
// let minuteTwo = parseInt(lines.shift());

// let hours = 0;
// let minutes = 0;

// function min(a, b) {
//   if(a < b) {
//     return b - a;

//   } else {
//     return (60 - a) + b;

//   }
// }

// if( hourOne < hourTwo) {
//   if(!(hourOne === (hourTwo - 1))) {
//     hours = hourTwo - hourOne;

//   }

//   minutes = min(minuteOne, minuteTwo);

// }else{
//   if(hourTwo === 0) {
//     hours = (23 - hourOne) + hourTwo;

//   } else {
//     hours = (24 - hourOne) + hourTwo;

//   }

//   if(!((hourOne + minuteOne) === (hourTwo + minuteTwo))) {
//     minutes = min(minuteOne, minuteTwo);

//   }

// }

// if(minutes === 60) {
//   minutes = 0;
//   hours++;

// }

// console.log('O JOGO DUROU ' + hours + ' HORA(S) E ' + minutes + ' MINUTO(S)');

const hourA = parseInt(lines.shift(), 10);
const minuteB = parseInt(lines.shift(), 10);
const hourC = parseInt(lines.shift(), 10);
const minuteD = parseInt(lines.shift(), 10);

let dif;

dif = ((minuteB * 60) + minuteD) - ((hourA * 60) + hourC);
if (dif <= 0) dif += 24 * 60;

console.log(`O JOGO DUROU ${(dif / 60).toFixed(0)} HORA(S) E ${dif % 60} MINUTO(S)`);
