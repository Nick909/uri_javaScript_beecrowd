const fs = require('fs');

const dirDev = './dev';
const file = 'invertebrado\nanelideo\nonivoro';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

if (lines[0] === 'vertebrado') {
  if (lines[1] === 'ave') {
    if (lines[2] === 'carnivoro') {
      console.log('aguia');
    } else if (lines[2] === 'onivoro') {
      console.log('pomba');
    }
  } else if (lines[1] === 'mamifero') {
    if (lines[2] === 'herbivoro') {
      console.log('vaca');
    } else if (lines[2] === 'onivoro') {
      console.log('homem');
    }
  }
} else if (lines[0] === 'invertebrado') {
  if (lines[1] === 'inseto') {
    if (lines[2] === 'hematofago') {
      console.log('pulga');
    } else if (lines[2] === 'herbivoro') {
      console.log('lagarta');
    }
  } else if (lines[1] === 'anelideo') {
    if (lines[2] === 'hematofago') {
      console.log('sanguessuga');
    } else if (lines[2] === 'onivoro') {
      console.log('minhoca');
    }
  }
}
