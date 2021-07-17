const prompt = require('./.gitignore/node_modules/prompt-sync')({
  sigint: true,
});

const hat = '^';
const hole = 'O';
const fieldChar = '░';
const pathChar = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.charX = 0;
    this.charY = 0;

  }
    generateField(height, width, percent){
    let fieldRow = [];
    let tile = '';
    for(let i = 0; i <= height; i++){
      let fieldCol = [];
      for(let j = 0; j < width; j++){
        function genTile(){
          let num = (Math.floor(Math.random() * 10) + 1 );
          if(num < (100 - percent) / 10){
            tile = '░';
          } else {
            tile = 'O';
          }
        }
        genTile();
        fieldCol.push(tile)
      };
      fieldRow.push(fieldCol);
    }
    fieldRow[0][0] = "^"
     console.log(fieldRow);
    }
    
  print() {
    for (let row of this.field) {
      console.log(row.join(''));
    }
  }
  
  moveX(num) {
    this.charX = this.charX + num;
    return this.charX;
  }
  moveY(num) {
    this.charY = this.charY + num;
    return this.charY;
  }

  play() {
    let currentPos = this.field[this.charY][this.charX];
      this.print(this.field);
      let move = prompt(
        'Which direction would you like to move? r=right, l=left, u=up, and d=down '
      );
      if (move === 'r') {
        this.moveX(1);
      } else if (move === 'l') {
        this.moveX(-1);
      } else if (move === 'u') {
        this.moveY(-1);
      } else if (move === 'd') {
        this.moveY(1);
      }
      currentPos = this.field[this.charY][this.charX];
      this.field[this.charY][this.charX] = pathChar;
      if (currentPos === 'O') {
        console.log(
          "I'm sorry, you fell down a hole! Better luck next time."
        );
      } else if (currentPos === '^') {
        console.log(
          'Yeah!!! You finally found your hat. Congratulations!!'
        );
    } else {
        this.play();
    }
  }
}

const myField = new Field([
  [
    pathChar,
    hole,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    hole,
    fieldChar,
    fieldChar,
  ],
  [
    fieldChar,
    hole,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    hole,
    fieldChar,
    fieldChar,
  ],
  [
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    hole,
    fieldChar,
    fieldChar,
  ],
  [
    hat,
    hole,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    fieldChar,
    hole,
    fieldChar,
    fieldChar,
  ],
]);

myField.play();
