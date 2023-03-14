'strict';
let fs = require('fs');

let dir = './files/';
(!fs.existsSync(dir))? fs.mkdirSync(dir) : null;


let text = "test mais que coisa não 4..."
fs.writeFileSync(`./files/zero.txt`,`${text}`, function(err){

  if(err){
		return console.log('erro');
	}
 
	console.log('Arquivo Criado');
});


let input = fs.readFileSync('./files/test.txt','utf8');
let lines = input.split('\n');

for(let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}