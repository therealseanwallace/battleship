import { ShipFactory } from "./ShipFactory";

export const GameBoardFactory = () => {

  class Square {
    constructor(x, y) {
      x = x || 0; // converts falsey values to 0 (in this case, NaN)
      this.xy = [x, y];
      this.populated = false;
      this.occupant = null;
      this.hit = null;
    }
    placeShipOnSquare(shipID) {
      this.occupant = shipID;
      //console.log('ship placed on square! this.occupant is', this.occupant);
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
  
  

  const placeShipOnBoard = () => {
    
  }

  class Board {
    constructor() {
      this.board = buildBoard();
      this.shipArray = [];
    }

    placeShipOnBoard(x, y, horizVert, shipType) {
      // console.log('this is', this)
      // make a new ship according to shipType
      const newShip = ShipFactory.ShipFactory(shipType);
      const newShipLength = newShip.length;
      // check that this is a legal ship placement
      if (horizVert === 0) {
        if (x + newShipLength > 9) {
          return ('Error. Illegal move')
        }
      } else {
        if (y + newShipLength > 9) {
          return ('Error. Illegal move')
        }
      }
      
      // get the length of newShip and loop through (x * length) squares in
      // the directtion indicated by horizVert, modifying their occupant
      // attributes accordingly with newShip's ID
      
      const result = [];
      for (let i = 0; i < newShipLength; i++) {
        if (horizVert === 0) {
          this.board[x + i][y].placeShipOnSquare(newShip.shipID);
          result.push([x + i, y]);
          /*if (this.board[x + i][y].occupant === newShip.shipID) {
            result.push([x + i, y]);
          }*/
        } else {
          this.board[x][y + i].placeShipOnSquare(newShip.shipID);
          result.push([x, y + i])
          /*if (this.board[x][y + i].occupant === newShip.shipID) {
            result.push([x][y + i]);
          }*/
        } 
      }
      return result;
      

    }
  }

  const gameBoard = new Board;
  
  
  

  return { gameBoard };
};
