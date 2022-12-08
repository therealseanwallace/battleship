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
  console.log("placeShipOnBoard called with", x, y, horizVert, shipType);
  console.log("this is ", this);
  const newShip = ShipFactory.ShipFactory(shipType);
  newShip.direction = horizVert;
  const newShipLength = newShip.length;

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 9) {
      return false;
    }
  } else if (y + newShipLength > 9) {
    return false;
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return false;
  }

  this.shipArray.push(newShip);

  const result = [];

  // loop through newShipLength squares in
  // the direction indicated by horizVert, modifying their occupant
  // attributes according to newShip's ID
  console.log("newShip is", newShip);
  for (let i = 0; i < newShipLength; i++) {
    if (newShip.direction === 0) {
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
  console.log("ship placed! result is", result);
  return result;
}

function checkFleetSunk() {
  // Loops through this.shipArray, checking each ships .sunk property. If
  // any unsunk ship is found, returns false - otherwise, returns true.
  console.log("checkFleetSunk! this is ", this);
  console.log("this.shipArray is ", this.shipArray);
  let result = true;
  for (let i = 0; i < this.shipArray.length; i += 1) {
    const ship = this.shipArray[i];
    console.log("ship is ", ship, "ship.sunk is ", ship.sunk);
    if (!ship.sunk) {
      result = false;
    }
  }
  if (result) {
    alert("game over!!");
  }
  return result;
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

function receiveAttack(coords) {
  // we look up the given square. if there is an occupant, we get the ship's
  // object using getShip() and call its hit() method
  const x = coords[0];
  const y = coords[1];
  console.log("receiveAttack! this is", this, "x is", x, "y is", y);
  const player = this.playerType;
  console.log("this.board[x][y] is", this.board[x][y]);
  console.log("this.board[x][y].hit is", this.board[x][y].hit);
  if (this.board[x][y].hit === true) {
    return false;
  }
  console.log("this.board[x][y].occupant is", this.board[x][y].occupant);
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
    console.log("hit! ship is", ship);
    this.board[x][y].hit = true;
    const status = ship.hit();
    let checkFleet;
    if (player === 1) {
      const checkPlayerFleetSunk = checkFleetSunk.bind(playerBoard);
      checkFleet = checkPlayerFleetSunk();
    } else {
      const checkCpuFleetSunk = checkFleetSunk.bind(cpuBoard);
      checkFleet = checkCpuFleetSunk();
    }
    console.log("checkFleet is", checkFleet);
    if (checkFleet === true) {
      return "gameOver";
    }
    if (status === "sunk") {
      return "sunk";
    }
    return "hit";
  }
  this.board[x][y].hit = true;
  return "miss";
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

class Board {
  constructor() {
    this.board = buildBoard();
    this.shipArray = [];
    this.placeShipOnBoard = placeShipOnBoard;
    this.checkForOccupants = checkForOccupants;
    this.receiveAttack = receiveAttack;
    this.getShip = getShip;
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

const playerBoard = new Board();
const cpuBoard = new Board();

/*const checkPlayerFleetSunk = checkFleetSunk.bind(playerBoard);
console.log('checkPlayerFleetSunk is', checkPlayerFleetSunk)
console.log('checkplayerFleetSunk() is', checkPlayerFleetSunk())
const checkCpuFleetSunk = checkFleetSunk.bind(cpuBoard);
console.log('checkCpuFleetSunk is', checkCpuFleetSunk)*/

export {
  buildBoard,
  placeShipOnBoard,
  checkFleetSunk,
  getShip,
  receiveAttack,
  checkForOccupants,
  playerBoard,
  cpuBoard,
};
