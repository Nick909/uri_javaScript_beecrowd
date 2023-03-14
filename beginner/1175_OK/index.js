const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `-0
-5
4
5
6
2
63
-8.5`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// -------------------------------------------->

lines.reverse().map((ele, id) => console.log(`N[${id}] = ${parseInt(ele, 10)}`));
