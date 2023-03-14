/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dir = './dev';
const datas = '3 \n9';

(!fs.existsSync(dir)) ? fs.mkdirSync(dir) : null;

// eslint-disable-next-line no-sequences
fs.writeFileSync(`${dir}/input.txt`, datas), (err) => {
  (err) ? console.log(err) : console.log('arquivo criado');
};

const input = fs.readFileSync(`${dir}/input.txt`, 'utf8');
const lines = input.split('\n');

//-----------------------------------

const x = parseInt(lines.shift(), 10);
const y = parseInt(lines.shift(), 10);

const PROD = x * y;

console.log(`PROD = ${PROD}`);
