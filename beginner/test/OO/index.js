let fs = require('fs');
let dir = './dev';
let text = 'Pedro Nicholas \n23 03 02 1997';

(!fs.existsSync(dir))? fs.mkdirSync(dir) : null;

fs.writeFileSync(`${dir}/input.txt`, text, (err) => {
  if (err) console.log('err') ;
  
  console.log('arquivo criado');
})

let input = fs.readFileSync(`${dir}/input.txt`, 'utf8');

let lines = input.split('\n');

function Person(first, last, age, birthday) {
  this.name = {
    first,
    last,
  };

  this.age = age;

  this.birthday = birthday;

  this.greeting = () => {
    console.log(`Hi! I\'m ${this.name.first}. and I'm ${this.age} old, my birthday is ${this.birthday}`);
  };

  this.rename = (newName) => {
    this.name = newName;
  };
}

let [first, last] = lines[0].split(' ');
let [age, day, month, year] = lines[1].split(' ').map((e) => parseInt(e));

let birthday = new Date(year, month - 1, day);
birthday = birthday.toLocaleDateString('pt-BR').split('-').reverse().join('/');


let personOne = new Person(first, last, age, birthday);

console.log(personOne.name.first + ' '  + personOne.name.last);
personOne.greeting();
personOne.rename('testRename');
console.log(personOne.name);

// console.log(personTwo.name);
// personTwo.greeting();