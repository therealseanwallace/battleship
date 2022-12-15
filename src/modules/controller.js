/* eslint-disable import/no-cycle */
import { playerFactory } from "./playerFactory";
import * as iface from "./interface";

class Topic {
  constructor(topic) {
    this.subscribers = [];
  }
}

class PubSub {
  sub(topic, subscriber) {
    console.log("sub! topic is", topic);
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for subscribers`;
    }
    if (!this[topic]) {
      this[topic] = new Topic();
    }
    this[topic].subscribers.push(subscriber);
    console.log("subbed! this[topic] = ", this[topic]);
    console.log("subbed! this is ", this);
  }

  unsub(topic, subscriber) {
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for unsubscribing`;
    }
    if (this[topic].subscribers.includes(subscriber)) {
      this[topic].subscribers = this[topic].subscribers.filter(
        (sub) => sub !== subscriber
      );
    }
  }

  pub(topic, payload) {
    console.log("pub called! topic, payload are ", topic, payload);
    console.log("this is ", this);
    this[topic].subscribers.forEach((sub) => sub(payload));
  }

  returnSubscribers(topic) {
    console.log("returnSubscribers called! topic is ", topic, "this is ", this);
    const result = [];
    this[topic].subscribers.forEach((sub) => result.push(sub));
    return result;
  }
}

/*controller.pubSub.pub("placeShip", [Number(e.target.dataset.x),
  Number(e.target.dataset.y),
  Number(dragStorage.dataset.direction),
  Number(dragStorage.dataset.length)] )*/

const pubSub = new PubSub();

const coinFlip = () => Math.floor(Math.random() * 2) + 1;

// Event emitter for pub/sub implementation

class Controller {
  constructor() {
    // pulls in players and board from playerFactory
    this.players = playerFactory();
    // flips a coin to determine who goes first
    this.currentPlayer = coinFlip();
    this.shipsPlaced = false;
    this.gameOver = false;
    this.shipPlacedCount = 0;
    this.cpuHit = null;
    this.secondCpuHit = null;
    this.lastHit = null;
    this.probableShipDirection = null;
  }

  returnBoards() {
    const cpuBoard = this.players.cpu.board;
    const humanBoard = this.players.human.board;
    console.log("cpuBoard is ", cpuBoard);
    console.log("humanBoard is ", humanBoard);
  }

  startGame() {
    if (coinFlip() === 1) {
      this.gameFlow(1);
    } else {
      this.gameFlow(2);
    }
  }

  gameFlow(whoseTurn) {
    if (this.gameOver === true) {
      console.log("game is over!");
      return;
    }
    if (whoseTurn === 1) {
      // prompt player for a move
      pubSub.pub("getPlayersMove", iface.getPlayerMove);
    } else {
      // prompt cpu for a move
      getCPUMove();
    }
  }

  addTestShips() {
    this.players.human.board.gameBoard.placeShipOnBoard(0, 0, 0, 6);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 1, 0, 4);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 2, 0, 3);
    this.players.human.board.gameBoard.placeShipOnBoard(0, 3, 0, 2);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 0, 0, 6);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 1, 0, 4);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 2, 0, 3);
    this.players.cpu.board.gameBoard.placeShipOnBoard(0, 3, 0, 2);
  }

  decrementPlacedCount() {
    console.log(
      "decrementPlacedCount called! this.shipPlacedCount is ",
      this.shipPlacedCount
    );
    this.shipPlacedCount -= 1;
    console.log(
      "decrementPlacedCount done! this.shipPlacedCount is ",
      this.shipPlacedCount
    );
  }

  shipPlaced(result) {
    this.shipPlacedCount += 1;
    console.log("********shipPlaced! result is", result);
    console.log("this.shipPlacedCount is ", this.shipPlacedCount);

    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      pubSub.pub("shipsPlaced", iface.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);
    console.log("playersMove! move is ", move);
    let resultArray = [];
    resultArray.push(move[0], move[1]);

    if (result === "hit") {
      resultArray.push(true, false);
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
    } else if (result === "miss") {
      resultArray.push(false, false);
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
    } else if (result === "sunk") {
      resultArray.push(true, false);
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(2);
      // change the below to use pub/sub too
      pubSub.pub("sunk", true);
    } else if (result === "gameOver") {
      resultArray.push(true, false);
      pubSub.pub("markSquareHit", resultArray);
      this.gameOver = true;
      pubSub.pub("gameOver", "You win");
    } else if (result === "false") {
      pubSub.pub("invalid");
      this.gameFlow(1);
    }
  }

  getRandomAdjacentSquare(hit) {
    const x = hit[0];
    const y = hit[1];
    const { board } = this.players.human;
    const adjacentSquares = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    let validSquares = [];
    console.log("this.players.human.board is ", board);
    console.log(
      "this.players.human.board.checkifSquareExists is ",
      board.checkIfSquareExists
    );
    adjacentSquares.forEach((square) => {
      if (board.checkIfSquareExists(square[0], square[1])) {
        validSquares.push(square);
      }
    });
    console.log("validSquares are ", validSquares);
    let validAttacks = [];
    validSquares.forEach((square) => {
      if (!board.checkIfSquareIsHit(square[0], square[1])) {
        validAttacks.push(square);
      }
    });
    console.log("validAttacks are ", validAttacks);
    if (validAttacks.length === 0) {
      this.cpuHit = false;
    }

    // get a random square from validAttacks
    const randomIndex = Math.floor(Math.random() * validAttacks.length);
    const randomSquare = validAttacks[randomIndex];
    console.log("randomSquare is ", randomSquare);
    return randomSquare;
  }
  
  getProbableShipDirection() {
    let dir;
    const x1 = this.cpuHit[0];
    const y1 = this.cpuHit[1];
    const x2 = this.secondCpuHit[0];
    const y2 = this.secondCpuHit[1];
    if (x1 === x2) {
      if (y2 > y1) { 
        dir = 0;
      }
      else {
        dir = 2;
      }
    }
    else {
      if (x2 > x1) {
        dir = 1;
      }
      else {
        dir = 3;
      }
    }


    console.log('getProbableShipDirection! dir is ', dir);
    return dir;
  }

  getAdjacentSquareByDirection(x, y, dir) { 
    console.log('getAdjacentSquareByDirection! x, y, dir are ', x, y, dir);
    switch (dir) { 
      case 0:
        console.log('getAdjacentSquareByDirection! square is ', [x, y + 1]);
        return [x, y + 1];
      case 1:
        console.log('getAdjacentSquareByDirection! square is ', [x + 1, y]);
        return [x + 1, y];
      case 2:
        console.log('getAdjacentSquareByDirection! square is ', [x, y - 1]);
        return [x, y - 1];
      default:
        console.log('getAdjacentSquareByDirection! square is ', [x - 1, y]);
        return [x - 1, y];
    }
  }

  getCPUMove() {
    let move = this.players.cpu.attack();
    console.log('getCPUMove! move is ', move);

    if (this.secondCpuHit && !this.probableShipDirection) { 
      console.log('this.secondCpuHit is ', this.secondCpuHit);
      if (!this.probableShipDirection) { 
        this.probableShipDirection = this.getProbableShipDirection();
        console.log('this.probableShipDirection is ', this.probableShipDirection);
      }
    }
    
    if (this.probableShipDirection) { 
      switch (this.probableShipDirection) {
        case 0:
          move = this.getAdjacentSquareByDirection(this.lastHit[0], this.lastHit[1], 0);
          break;
        
        case 1:
          move = this.getAdjacentSquareByDirection(this.lastHit[0], this.lastHit[1], 1);
          break;

        case 2:
          move = this.getAdjacentSquareByDirection(this.lastHit[0], this.lastHit[1], 2);
          break;

        default:
          move = this.getAdjacentSquareByDirection(this.lastHit[0], this.lastHit[1], 3);
          break;
      }
    }

    if (this.cpuHit && !this.secondCpuHit && !this.probableShipDirection) {
      move = this.getRandomAdjacentSquare(this.cpuHit);
    }

    console.log("getCPUMove! move is ", move);
    let result = this.players.human.board.receiveAttack(move);
    while (result === false) {
      console.log('result is false! trying again');
      const newAttack = this.players.cpu.attack();
      console.log('newAttack is ', newAttack);
      move = newAttack;
      result = this.players.human.board.receiveAttack(newAttack);
      console.log('still inside while loop. result is ', result);
    }
    console.log("getCPUMove! result is ", result);
    let resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, true);
      if (this.cpuHit && !this.secondCpuHit) { 
        this.secondCpuHit = [move[0], move[1]];
      } else { this.cpuHit = [move[0], move[1]]; }
      this.lastHit = [move[0], move[1]];
      console.log("this.cpuHit is ", this.cpuHit);
      console.log("this.secondCpuHit is ", this.secondCpuHit);
    } else if (result === "miss") {
      resultArray.push(false, true);
      if (this.probableShipDirection) { 
        switch (this.probableShipDirection) { 
          case 0:
            this.probableShipDirection = 2;
            break;
          case 1:
            this.probableShipDirection = 3;
            break;
          case 2:
            this.probableShipDirection = 0;
            break;
          default:
            this.probableShipDirection = 1;
            break;
        }
        this.lastHit = this.cpuHit;
      }
    } else if (result === "sunk") {
      this.cpuHit = null;
      this.secondCpuHit = null;
      this.probableShipDirection = null;
      this.lastHit = null;
      resultArray.push(true, true);
      pubSub.pub("sunk", false);
    } else if (result === "gameOver") {
      pubSub.pub("gameOver", "The computer wins!");
      this.gameOver = true;
    }
    console.log("passed the if/else");
    if (result !== false) {
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(1);
    }
  }

  placeHuman(ship) {
    console.log("placeHuman called! ship is ", ship);
    console.log("placing ship! this.shipPlacedCount is ", this.shipPlacedCount);
    console.log("this is ", this);
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      Number(ship[2]),
      ship[3]
    );
    console.log("result is ", result);
    if (result !== false) {
      placedShip(result);
      console.log(
        "placed ship! this.shipPlacedCount is ",
        this.shipPlacedCount
      );

      return;
    }
  }

  rotateShip(shipData) {
    console.log("pubSub called rotateShip!", shipData);
    const result = this.players.human.board.rotateShipinStorage(shipData);
    console.log("controller.rotateShip result is ", result);
    console.log(
      "rotating ship! this.shipPlacedCount is ",
      this.shipPlacedCount
    );
    if (result !== false) {
      this.shipPlaced(result);
      console.log(
        "rotating ship! this.shipPlacedCount is ",
        this.shipPlacedCount
      );
    }
  }

  moveShip(details) {
    console.log("pubSub called moveShip! details are ", details);
    console.log("moveShip = ", moveShip);
    console.log(
      "this.players.human.board.getShip = ",
      this.players.human.board.getShip
    );
    this.players.human.board.moveShipInStorage(
      details[0],
      details[1],
      details[2],
      details[3]
    );
  }
}

const controller = new Controller();

const placedShip = controller.shipPlaced.bind(controller);
const startGame = controller.startGame.bind(controller);
const playersMove = controller.playersMove.bind(controller);
const getCPUMove = controller.getCPUMove.bind(controller);
const placeHumanShip = controller.placeHuman.bind(controller);
const rotateShip = controller.rotateShip.bind(controller);
const moveShip = controller.moveShip.bind(controller);
const markSquare = iface.markSquareHit.bind(iface);

pubSub.sub("placeShip", placeHumanShip);
pubSub.sub("shipsPlaced", iface.shipsPlaced);
pubSub.sub("gameStart", startGame);
pubSub.sub("getPlayersMove", iface.getPlayerMove);
pubSub.sub("playersMove", playersMove);
pubSub.sub("rotateShip", rotateShip);
pubSub.sub("moveShip", moveShip);
pubSub.sub("getPlayerMove", iface.getPlayerMove);
pubSub.sub("markSquareHit", markSquare);
pubSub.sub("sunk", iface.sunk);
pubSub.sub("gameOver", iface.gameOver);
pubSub.sub("invalid", iface.invalidMove);
pubSub.sub("updateNots", iface.updateNots);

console.log("subs are", pubSub.returnSubscribers("placeShip"));

controller.returnBoards();

pubSub.sub(
  "decrementPlacedCount",
  controller.decrementPlacedCount.bind(controller)
);

export { pubSub };
