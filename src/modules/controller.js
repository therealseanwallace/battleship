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
      iface.getPlayerMove();
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

  shipPlaced() {
    this.shipPlacedCount += 1;
    if (this.shipPlacedCount === 4) {
      this.shipsPlaced = true;
      pubSub.pub("shipsPlaced", iface.shipsPlaced);
    }
  }

  playersMove(move) {
    const result = this.players.cpu.board.receiveAttack(move);
    if (result === "hit") {
      iface.markSquareHit(move[0], move[1], true, false);
    } else if (result === "miss") {
      iface.markSquareHit(move[0], move[1], false, false);
    } else if (result === "sunk") {
      iface.markSquareHit(move[0], move[1], true, false);
      iface.sunk(move[0], move[1], false);
    } else if (result === "gameOver") {
      this.gameOver = true;
      iface.gameOver("You win");
    } else if (result === "false") {
      iface.invalidMove(1);
      this.gameFlow(1);
    }
    this.gameFlow(2);
  }

  getCPUMove() {
    const move = this.players.cpu.attack();
    const result = this.players.human.board.receiveAttack(move);
    if (result === "hit") {
      iface.markSquareHit(move[0], move[1], true, true);
    } else if (result === "miss") {
      iface.markSquareHit(move[0], move[1], false, true);
    } else if (result === "sunk") {
      iface.markSquareHit(move[0], move[1], true, true);
      iface.sunk(true);
    } else if (result === "gameOver") {
      iface.gameOver("The computer wins!");
      this.gameOver = true;
    } else if (result === "false") {
      getCPUMove();
    }
    this.gameFlow(1);
  }

  placeHuman(ship) {
    const result = this.players.human.board.placeShipOnBoard(
      ship[0],
      ship[1],
      ship[2],
      ship[3]
    );
    if (result !== false) {
      placedShip();
    }
  }

  rotateShip(coords) {
    console.log("pubSub called rotateShip!", coords);
    this.players.human.board.rotateShipinStorage(Number(coords[0]), Number(coords[1]));
  }
}

const controller = new Controller();

const placedShip = controller.shipPlaced.bind(controller);
const startGame = controller.startGame.bind(controller);
const playersMove = controller.playersMove.bind(controller);
const getCPUMove = controller.getCPUMove.bind(controller);
const placeHumanShip = controller.placeHuman.bind(controller);
const rotateShip = controller.rotateShip.bind(controller);

pubSub.sub("placeShip", placeHumanShip);
pubSub.sub("shipsPlaced", iface.shipsPlaced);
pubSub.sub("gameStart", startGame);
pubSub.sub("getPlayersMove", iface.getPlayerMove);
pubSub.sub("playersMove", playersMove);
pubSub.sub("rotateShip", rotateShip);
console.log("subs are", pubSub.returnSubscribers("placeShip"));

export { pubSub };
