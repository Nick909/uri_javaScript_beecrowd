/*
  A = 100 B = 110  Tabela Verdade
 //                      And1     And2
  A | B  | !A  | !B  | !B && A | B && !A | And1 || And2 |
  1 | 1  |  0  |  0  |    0    |    0    |      0       |
  0 | 1  |  1  |  0  |    0    |    1    |      1       |
  0 | 0  |  1  |  1  |    0    |    0    |      0       | 
*/


const fs = require('fs');
const dirDev = './dev';
const file = '4\n6';

(!fs.existsSync(`${dirDev}`)) ? fs.mkdirSync(`${dirDev}`) : null;

fs.writeFileSync(`${dirDev}/input.txt`, file, (error) => {
  console.log(error);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');


//---------------------------------------------------------------------
const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
};

const completWithZero = (elOne, elTwo) => {
  for(let i = 0; i <= elOne.length - elTwo.length; i++) {
    elTwo = '0' + elTwo;
  }

  return elTwo;
};

let A = dec2bin(lines.shift());
let B = dec2bin(lines.shift());
let somaBin = '0';
let dec = 0;


if(A.length != B.length) {
  (A.length > B.length) ?  B = completWithZero(A, B) :  A = completWithZero(B, A);
}

for(let i = 0; i < A.length; i++) {
  //console.log((!!parseInt(A[i]) && !parseInt(B[i])) || ((!parseInt(A[i]) && !!parseInt(B[i]))));

  (!!parseInt(A[i]) && !parseInt(B[i])) || ((!parseInt(A[i]) && !!parseInt(B[i]))) ?
    somaBin += '1' 
  : 
    somaBin += '0';

}

for (let c = 0; c < somaBin.length; c++) dec += Math.pow(2, c) * somaBin[somaBin.length - c - 1]; //calcula para pegar do último ao primeiro

console.log(dec);










