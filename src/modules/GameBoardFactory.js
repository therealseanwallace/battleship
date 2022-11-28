export const GameBoardFactory = () => {
  class Square {
    constructor(x, y) {
      x = x || 0; // converts falsey values to 0 (in this case, NaN)
      this.xy = [x, y];
      this.populated = false;
      this.occupant = null;
      this.hit = null;
    }
  }
  
  const buildBoard = () => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
      const x = i;
      const xArray = [];
      for (let index = 0; index < 10; index++) {
        const y = index;
        const sq = new Square(x, y);
        xArray.push(sq);
      }
      array.push(xArray);
    }
  return array;
  };
  
  const placeShip = (x, y, horizVert) => {

  }

  class Board {
    constructor() {
      this.board = buildBoard();
      this.shipArray = [];
      this.placeShip = placeShip;
    }
  }

  const gameBoard = new Board;
  
  
  

  return { gameBoard };
};
