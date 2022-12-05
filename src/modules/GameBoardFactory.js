/* eslint-disable no-param-reassign */
import { ShipFactory } from "./ShipFactory";
import { flipCoin } from "./helpers";

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
  console.log("placeShipOnBoard! args are ", x, y, horizVert, shipType);
  console.log("placeShipOnBoard! this is ", this);
  // make a new ship according to shipType
  const newShip = ShipFactory.ShipFactory(shipType);
  console.log("newShip is ", newShip);

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

function rotateShip(x, y) {
  console.log("rotateShip! args are ", x, y);
  const result = this.rotateShipinStorage(x, y);
  console.log("result is, ", result);
  return result;
}

// there perhaps needs to be some difference here between the cpu and player

function receiveAttack(x, y) {
  // we look up the given square. if there is an occupant, we get the ship's
  // object using getShip() and call its hit() method
  if (this.board[x][y].hit === true) {
    return false;
  }
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
    this.board[x][y].hit = true;
    if (this.checkFleetSunk() === true) {
      return true;
    }
    return [[x,y], true];
  }
  this.board[x][y].hit = true;
  return [[x, y], false];
}

function checkForOccupants(x, y, horizVert, length) {
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

function rotateShipinStorage(x, y) {
  // find the ship at the given coordinates
  console.log("this is, ", this);
  console.log("this.board is, ", this.board);
  console.log("this.board[x][y].occupant is ", this.board[x][y].occupant);
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);
  console.log("ship is, ", ship);
  // if the ship is horizontal, rotate it to vertical
  const result = [];
  if (ship.orientation === 0) {
    ship.orientation = 1;
    result.push([x, y]);
    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = null;
      const yElement = this.board[x][y - i];
      yElement.occupant = shipID;
      result.push([x, y + i]);
    }
  } else {
    // otherwise, rotate it to horizontal
    ship.orientation = 0;
    for (let i = 1; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = shipID;
      const yElement = this.board[x][y - i];
      yElement.occupant = null;
      result.push([x + i, y]);
    }
  }
  return result;
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
    this.rotateShipinStorage = rotateShipinStorage;
    this.rotateShip = rotateShip;
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
  return { gameBoard };
};

export {
  buildBoard,
  placeShipOnBoard,
  checkFleetSunk,
  getShip,
  receiveAttack,
  checkForOccupants,
  rotateShipinStorage,
  GameBoardFactory,
};
