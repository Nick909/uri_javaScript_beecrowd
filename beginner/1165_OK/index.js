const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `3
8
47
51
7
25
2
3`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ------------------------------------------------->

// <------------------// OK //---------------------->
lines.shift();
const num = parseInt(lines.length - 1, 10);
let numTestR = 0;

const isPrime = (numTest) => {
  let aux = numTest - 1;
  let boo = true;

  do {
    if (numTest % aux === 0) {
      boo = false;
      break;
    }
    aux -= 1;
  } while (aux > 1);

  if (boo === true || numTest === 2) return `${numTest} eh primo`;
  return `${numTest} nao eh primo`;
};

for (let countI = 0; countI < num; countI += 1) {
  numTestR = parseInt(lines.shift(), 10);
  console.log(isPrime(numTestR));
}

// <------------------// NOT //---------------------->

// const isPrime = (numTest, aux, boo = true) => {
//   const auxF = aux - 1;
//   if (auxF > 1 && boo) {
//     return isPrime(numTest, auxF, !(numTest % auxF === 0));
//   }

//   if (boo === false) return `${numTest} nao eh primo`;
//   return `${numTest} eh primo`;
// };

// for (let countI = 0; countI < num; countI += 1) {
//   numTestR = parseInt(lines.shift(), 10);
//   console.log(isPrime(numTestR, numTestR));
// }
