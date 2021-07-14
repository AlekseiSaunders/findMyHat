const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldChar = '░';
const pathChar = '*';

class Field {
  constructor(field){
    this.field = field;
  }
  print(){
  for(let i = 0; i < this.field.length; i++){
  console.log(this.field[i].join(''));
}
}
const myField = new Field([
  [pathChar, hole, fieldChar, fieldChar, hole],
  [fieldChar, fieldChar, hole, fieldChar, fieldChar],
  [fieldChar, hole, fieldChar, fieldChar, fieldChar],
  [fieldChar, fieldChar, fieldChar, hole, fieldChar],
  [hole, hole, fieldChar, fieldChar, fieldChar],
  [hat, hole, hole, hole, fieldChar],
  [fieldChar, hole, fieldChar, fieldChar, fieldChar],
  [fieldChar, fieldChar, fieldChar, hole, hole],
  [hole, hole, fieldChar, fieldChar, fieldChar]
]
  );
myField.print()
