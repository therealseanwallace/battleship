/* eslint-disable no-param-reassign */
import { ShipFactory } from "./ShipFactory";

const buildBoard = () => {
  // build a 2d array representing a 10x10 game board
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    const x = i;
    const xArray = [];
    for (let index = 0; index < 10; index += 1) {
      const y = index;
      const sq = new Square(x, y);
      xArray.push(sq);
    }
    array.push(xArray);
  }
  return array;
};

function placeShipOnBoard(x, y, horizVert, shipType) {
  // make a new ship according to shipType
  const newShip = ShipFactory.ShipFactory(shipType);

  newShip.orientation = horizVert;
  const newShipLength = newShip.length;

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 9) {
      return "Error! Can't place ship out of bounds!";
    }
  } else if (y + newShipLength > 9) {
    return "Error! Can't place ship out of bounds!";
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return "Error! Can't place a ship on top of another ship!";
  }

  this.shipArray.push(newShip);

  const result = [];

  // loop through newShipLength squares in
  // the direction indicated by horizVert, modifying their occupant
  // attributes according to newShip's ID

  for (let i = 0; i < newShipLength; i++) {
    if (newShip.orientation === 0) {
      // i.e. if this ship is placed horizontally
      this.board[x + i][y].placeShipOnSquare(newShip.shipID);
      if (this.board[x + i][y].occupant === newShip.shipID) {
        result.push([x + i, y]);
      }
    } else {
      // the ship is placed vertically
      this.board[x][y + i].placeShipOnSquare(newShip.shipID);
      if (this.board[x][y + i].occupant === newShip.shipID) {
        result.push([x, y + i]);
      }
    }
  }
  return result;
}

function checkFleetSunk() {
  // Loops through this.shipArray, checking each ships .sunk property. If
  // any unsunk ship is found, returns false - otherwise, returns true.
  const array = this.shipArray;
  for (let i = 0; i < array.length; i += 1) {
    const ship = array[i];
    if (!ship.sunk) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line consistent-return
function getShip(ID) {
  // Loops through this.shipArray, checking for and returning the
  // object with the corresponding ID.
  const array = this.shipArray;
  for (let i = 0; i < array.length; i += 1) {
    const ship = array[i];
    if (ship.shipID === ID) {
      return ship;
    }
  }
}

function receiveAttack(x, y) {
  // we look up the given square. if there is an occupant, we get the ship's
  // object using getShip() and call its hit() method
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
    this.board[x][y].hit = true;
    return ship.hit();
  }
  this.board[x][y].hit = true;
  return !this.board[x][y].hit;
}

function checkForOccupants(x, y, horizVert, length) {
  console.log("checkForOccupants! this is", this);
  if (horizVert === 0) {
    for (let i = 0; i < length; i++) {
      const element = this.board[x + i][y];
      if (element.occupant !== null) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      const element = this.board[x][y + i];
      if (element.occupant !== null) {
        return true;
      }
    }
  }
  return false;
}

class Board {
  constructor() {
    this.board = buildBoard();
    this.shipArray = [];
    this.placeShipOnBoard = placeShipOnBoard;
    this.checkForOccupants = checkForOccupants;
    this.receiveAttack = receiveAttack;
    this.getShip = getShip;
    this.checkFleetSunk = checkFleetSunk;
  }
}

class Square {
  constructor(x, y) {
    x = x || 0; // converts falsey values to 0 (in this case, NaN)
    this.xy = [x, y];
    this.occupant = null;
    this.hit = false;
  }

  placeShipOnSquare(shipID) {
    this.occupant = shipID;
  }
}

const GameBoardFactory = () => {
  const gameBoard = new Board();
  console.log(
    "GameBoardFactory! gameBoard.placeShipOnBoard =",
    gameBoard.placeShipOnBoard
  );
  return { gameBoard };
};

export {
  buildBoard,
  placeShipOnBoard,
  checkFleetSunk,
  getShip,
  receiveAttack,
  checkForOccupants,
  GameBoardFactory,
};
