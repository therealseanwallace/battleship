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
    console.log('subbed! this is ', this)
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
    console.log('this is ', this) 
    this[topic].subscribers.forEach((sub) => sub(payload));
  }

  returnSubscribers(topic) {
    console.log("returnSubscribers called! topic is ", topic, "this is ", this);
    const result = [];
    this[topic].subscribers.forEach((sub) => result.push(sub));
    return result;
  }
}

export const notServ = (...args) => {
  console.log("notification server! args[0][0] is ", args[0][0]);
  if (args[0] === "shipsPlaced") {
    console.log("shipsPlaced notification received!");
  }

  if (args[0][0] === "shipDropped") {
    console.log("shipDropped notification received!");
  }
};

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

  shipPlaced(result) {
    this.shipPlacedCount += 1;
    console.log('********shipPlaced! result is', result);
    const type = result.length;
    pubSub.pub("placedRight", type);
    console.log('type is ', type);

    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      pubSub.pub("shipsPlaced", iface.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);
    console.log('playersMove! move is ', move);
    let resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, false);
    } else if (result === "miss") {
      resultArray.push(false, false);
    } else if (result === "sunk") {
      resultArray.push(true, false);
      // change the below to use pub/sub too
      pubSub.pub("sunk", true);
    } else if (result === "gameOver") {
      this.gameOver = true;
      pubSub.pub("gameOver", "You win");
    } else if (result === "false") {
      pubSub.pub("invalid");
      this.gameFlow(1);
    }
    pubSub.pub("markSquareHit", resultArray);
    this.gameFlow(2);
  }

  getCPUMove() {
    const move = this.players.cpu.attack();
    console.log('getCPUMove! move is ', move);
    const result = this.players.human.board.receiveAttack(move);
    console.log('getCPUMove! result is ', result)
    let resultArray = [];
    resultArray.push(move[0], move[1]);
    if (result === "hit") {
      resultArray.push(true, true);
    } else if (result === "miss") {
      resultArray.push(false, true);
    } else if (result === "sunk") {
      resultArray.push(true, true);
      pubSub.pub("sunk", false);
    } else if (result === "gameOver") {
      pubSub.pub("gameOver", "The computer wins!");
      this.gameOver = true;
    } else if (result === "false") {
      getCPUMove();
    }
    console.log('passed the if/else');
    if (result !== false) { 
      pubSub.pub("markSquareHit", resultArray);
      this.gameFlow(1);
    }
  }

  placeHuman(ship) {
    console.log('placeHuman called! ship is ', ship);
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      ship[2],
      ship[3]
    );
    console.log('result is ', result);
    if (result !== false) {
      placedShip(result);
      return;
    }
    pubSub.pub("placedWrong", ship[3]);
  }

  rotateShip(coords) {
    console.log("pubSub called rotateShip!", coords);
    this.players.human.board.rotateShipinStorage(Number(coords[0]), Number(coords[1]));
  }

  moveShip(details) {
    console.log("pubSub called moveShip! details are ", details);
    console.log("this.players.human.board = ", this.players.human.board);
    console.log('moveShip = ', moveShip);
    console.log('this.players.human.board.getShip = ', this.players.human.board.getShip);
    this.players.human.board.moveShipInStorage(details[0], details[1], details[2], details[3]);
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
pubSub.sub("placedRight", iface.placedRight);
pubSub.sub("placedWrong", iface.placedWrong);
pubSub.sub("updateNots", iface.updateNots);
console.log("subs are", pubSub.returnSubscribers("placeShip"));

export { pubSub };
