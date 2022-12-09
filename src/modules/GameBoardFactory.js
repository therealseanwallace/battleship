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

function placeShipOnBoard(x, y, horizVert, shipType, ID) {
  console.log('placeShipOnBoard called with', x, y, horizVert, shipType, ID);
  // make a new ship according to shipType
  const newShip = ShipFactory.ShipFactory(shipType);
  newShip.direction = horizVert;
  const newShipLength = newShip.length;
  if (ID) { 
    newShip.shipID = ID;
  }

  // the following if statements check that this is a legal ship placement
  if (horizVert === 0) {
    if (x + newShipLength > 9) {
      return false;
    }
  } else if (y - newShipLength < 0) {
    return false;
  }
  if (this.checkForOccupants(x, y, horizVert, newShipLength)) {
    return false;
  }
  
  

  this.shipArray.push(newShip);
  console.log('pushed ship! shipArray is now', this.shipArray);

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
      this.board[x][y - i].placeShipOnSquare(newShip.shipID);
      if (this.board[x][y - i].occupant === newShip.shipID) {
        result.push([x, y - i]);
      }
    }
  }
  return result;
}

function checkFleetSunk() {
  // Loops through this.shipArray, checking each ships .sunk property. If
  // any unsunk ship is found, returns false - otherwise, returns true.
  let result = true;
  for (let i = 0; i < this.shipArray.length; i += 1) {
    const ship = this.shipArray[i];
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
  const player = this.playerType;
  if (this.board[x][y].hit === true) {
    return false;
  }
  if (this.board[x][y].occupant !== null) {
    const ship = this.getShip(this.board[x][y].occupant);
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
      const element = this.board[x][y - i];
      if (element.occupant !== null) {
        return true;
      }
    }
  }
  return false;
}

function deleteShip(ID) {
  // loops through this.shipArray. upon finding ship with the given ID,
  // deletes it
  for (let i = 0; i < this.shipArray.length; i += 1) { 
    if (this.shipArray[i].shipID === ID) {
      console.log('found ship!! this.shipArray is', this.shipArray);
      this.shipArray.splice(i, 1);
      console.log('deleted ship! this.shipArray is now', this.shipArray);
    }
  }
}

function rotateShipinStorage(x, y) {
  // find the ship at the given coordinates and get its direction
  console.log('rotating ship! this.board[x][y] is', this.board[x][y])
  const shipID = this.board[x][y].occupant;
  console.log('shipID is', shipID);
  const ship = this.getShip(this.board[x][y].occupant);
  console.log('got ship! ship is', ship)
  const dir = ship.direction;

  // delete the ship from shipArray
  console.log("rotating ship! this is", this);
  this.deleteShip(shipID);

  let result;

  if (dir === 0) {
    // if the ship is horizontal, clear the board of the ship horizontally
    for (let i = 0; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      console.log("clearing squares! xElement.occupant =", xElement);
      xElement.occupant = null;
      console.log("cleared square! xElement.occupant =", xElement);
    }
    
    // check that the squares we will place the ship in are not occupied
    for (let i = 0; i < ship.length; i++) {
      const yElement = this.board[x][y - i];
      if (yElement.occupant !== null) {
        console.log('yElement is ', yElement)
        console.log('yElement.occupant is ', yElement.occupant, 'not null')
        return false;
      }
    }
    
    // having removed the ship, place it with the new direction
    result = this.placeShipOnBoard(x, y, 1, ship.length, shipID);
  } else {
    // else clear the board of the ship vertically
    for (let i = 0; i < ship.length; i++) {
      const yElement = this.board[x][y - i];
      console.log("clearing squares! yElement.occupant =", yElement.occupant);
      yElement.occupant = null;
      console.log("cleared square! yElement.occupant =", yElement.occupant);
    }
    
    // check that the squares we will place the ship in are not occupied
    for (let i = 0; i < ship.length; i++) {
      const xElement = this.board[x + i][y];
      if (xElement.occupant !== null) {
        console.log('xElement is ', xElement);
        console.log('xElement.occupant is ', xElement.occupant, 'not null')
        return false;
      }
    }

    // having removed the ship, replace it with the new direction
    result = this.placeShipOnBoard(x, y, 0, ship.length, shipID);
  }
  return result;
}

function moveShipInStorage(x, y, direction, length) {
  console.log('called moveShipInStorage!!');
  // find the ship at the given coordinates and get its direction
  const shipID = this.board[x][y].occupant;
  const ship = this.getShip(this.board[x][y].occupant);
  console.log('ship is', ship)
  if (ship === undefined) { 
    // if there is no ship at these coords, it's because there was an invalid
    // ship placement. Thererefore, there is no ship to delete. So, return.
    return;
  }
  const dir = ship.direction;

  // delete the ship from shipArray
  this.deleteShip(shipID);

  // clear the board of the ship
  if (dir === 0) {
    // if the ship is horizontal, clear the board of the ship horizontally
    for (let i = 0; i < length; i++) {
      const xElement = this.board[x + i][y];
      xElement.occupant = null;
    }
  } else {
    // else clear the board of the ship vertically
    for (let i = 0; i < length; i++) {
      const yElement = this.board[x][y - i];
      yElement.occupant = null;
    }
  }

  // place the ship on the board
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
    this.deleteShip = deleteShip;
    this.moveShipInStorage = moveShipInStorage;
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
  deleteShip,
  moveShipInStorage,
  playerBoard,
  cpuBoard,
};
