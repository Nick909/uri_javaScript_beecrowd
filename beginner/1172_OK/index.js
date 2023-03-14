const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `0
-5
63
0`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');
// -------------------------------------------->

lines.map((el, id) => console.log(`X[${id}] = ${(el > 0) ? parseInt(el, 10) : 1}`));
