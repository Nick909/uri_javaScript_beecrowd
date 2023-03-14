'strict';
let fs = require('fs');
let dir =  './files/';
let text = 'uma String complexa';

(!fs.existsSync(dir))? fs.mkdirSync(dir) : null;

fs.writeFileSync(`${dir}file.txt`, `${text}`, (err) => {
  (err) ? console.log(err) : console.log('arquivo criado');
});

let string = fs.readFileSync(`${dir}file.txt`, 'utf8');

string = string.split('').reverse().join('');

console.log(string);