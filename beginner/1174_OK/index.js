const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `-0
-5
63
-8.5`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');
// -------------------------------------------->

lines.map((ele, id) => ((parseFloat(ele) <= 10) ? console.log(`A[${id}] = ${parseFloat(ele).toFixed(1)}`) : null));
