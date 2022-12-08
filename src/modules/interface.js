import { componentFactory } from "./componentFactory";
import { displayObjects, shipPlacement, ships, cpu } from "./displayObjects";
import Cruiser from "../resources/Cruiser.png";
import Battleship from "../resources/Battleship.png";
import Destroyer from "../resources/Destroyer.png";
import Frigate from "../resources/Frigate.png";
import css from "./styles.css";
import { pubSub } from "./controller";

export function buildGrid(player) {
  let sqNum = 0;
  let humanSqNum = 0;
  let cpuSqNum = 0;
  for (let i = 9; i > -1; i--) {
    for (let j = 0; j < 10; j++) {
      const newSquare = shipPlacement[shipPlacement.length - 1];
      newSquare.xy = [j, i, sqNum, player];
      sqNum += 1;
      if (player === 1) {
        newSquare.class2 = "player-grid-square";
        newSquare.class3 = `player-grid-square-${j}-${i}`;
        humanSqNum += 1;
      } else {
        newSquare.class2 = "cpu-grid-square";
        newSquare.parent = ".cpu-board";
        newSquare.class3 = `cpu-grid-square-${j}-${i}`;
        cpuSqNum += 1;
      }
      componentFactory(newSquare);
    }
  }
}

export function buildShips() {
  for (let i = 0; i < 4; i += 1) {
    const element = ships[i];

    componentFactory(element);
    switch (element.name) {
      case "Battleship":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Battleship} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-direction="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Cruiser} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-direction="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Destroyer} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-direction="0">`;
        break;

      default:
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Frigate} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-direction="0">`;
        break;
    }
  }
}

export function shipsPlaced() {
  console.log('shipsPlaced() called! adding event listener');
  const startGame = document.querySelector(".start-game");
  startGame.addEventListener("click", buildMainGame);
}

export function rotateShipinStorage(x, y) {
  controller.rotateShipinStorage();
}

export function rotateShip(e) {
  console.log("rotateShip! e.target is", e.target);
  console.log(
    "rotateShip! controller.human.board.gameBoard is",
    controller.human.board.gameBoard
  );
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  const parent = ship.parentNode;
  const parentX = Number(parent.dataset.x);
  const parentY = Number(parent.dataset.y);
  switch (Number(e.target.dataset.length)) {
    case 6:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("battleship-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("battleship-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 4:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("cruiser-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("cruiser-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 3:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("destroyer-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("destroyer-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    default:
      if (ship.dataset.direction === "0") {
        ship.dataset.direction = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("frigate-rotated");
      } else {
        ship.dataset.direction = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("frigate-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
  }
}

export function cpuAttack() {
  let successfulAttack = false;
  while (!successfulAttack) {
    const attack = controller.cpu.attack();
    if (attack) {
      successfulAttack = true;
      addAttackListeners();
    }
  }
}

function attack(e) {
  console.log("e.target is", e.target);
  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  console.log("x is", x);
  console.log("y is", y);
  pubSub.pub('playersMove', [x, y]);

  /*const humanAttackResult = controller.human.attack(x, y);
  if (humanAttackResult) {
    removeAttackListeners();
  }
  console.log("humanAttackResult is", humanAttackResult);*/
}

export function removeAttackListeners() {
  const squares = document.querySelectorAll(".cpu-grid-square");
  squares.forEach((square) => {
    square.removeEventListener("click", attack);
  });
}

/*export function miss(move, player) {
  console.log('miss! check square')
  if (player === 1) { 
    const square = document.querySelector(`.cpu-grid-square-${move[0]}-${move[1]}`);
    square.classList.add("miss");
  } else {
    const square = document.querySelector(`.player-grid-square-${move[0]}-${move[1]}`);
    square.classList.add("miss");
  }
}*/

export function addAttackListeners() {
  console.log("addAttackListeners!)");
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack);
  });
}

export function sunk(isPlayerBoard) {
  if (!isPlayerBoard) { 
    document.querySelector(".cpu-alert").textContent = "The computer sunk your ship!";
  } else {
    document.querySelector(".player-alert").textContent = "You sunk an enemy ship!";
  }
}

export function markSquareHit(x, y, isOccupied, isPlayerBoard) {
  let square;
  
  if (isPlayerBoard) {
    square = document.querySelector(`.player-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) {
      square.classList.add("hit-occupied");
      document.querySelector(".cpu-alert").textContent = ("The computer hit your ship!");
    } else {
      square.classList.add("hit-empty");
      document.querySelector(".cpu-alert").textContent = ("The computer hit an empty square!");
    }
  } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("square is", square);
    if (isOccupied) {
      square.classList.add("hit-occupied");
      document.querySelector(".player-alert").textContent = ("You hit an enemy ship!");
    } else {
      square.classList.add("hit-empty");
      document.querySelector(".player-alert").textContent = ("You hit an empty square!");
    }
  }
}

export function invalidMove(player) {
  if (player === 1) {
    document.querySelector(".cpu-alert").textContent = ("The computer tried to attack an invalid square!");
  } else {
    document.querySelector(".player-alert").textContent = ("You tried to attack an invalid square!");
  }
}

export function gameOver(message) {
  document.querySelector(".cpu-alert").textContent = "";
  document.querySelector(".player-alert").textContent = message;
}

export function buildMainGame() {
  const startGameButton = document.querySelector(".start-game");
  startGameButton.style.display = "none";
  componentFactory(cpu[0]);
  buildGrid(2);
  pubSub.pub("gameStart", "true");

  //addAttackListeners();
}

let dragStorage = "test";

export function getPlayerMove() {
  // provide the player with some sort of prompt. for now, console
  console.log('please make your move!');
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", attack);
  });
}

export function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("img");
  console.log("data is", data);
  e.target.appendChild(document.getElementById(data));
  console.log(
    "drop! about to place ship. args are ",
    e.target.dataset.x,
    e.target.dataset.y,
    0
  );
  console.log("pubSub.pub is", pubSub.pub);
  pubSub.pub("placeShip", [
    Number(e.target.dataset.x),
    Number(e.target.dataset.y),
    Number(dragStorage.dataset.direction),
    Number(dragStorage.dataset.length),
  ]);

  /*if (placedShipsCount === 4) {
    const startGame = document.querySelector(".start-game");
    startGame.style.display = "block";
    startGame.addEventListener("click", buildMainGame);
    document.querySelector(".ships-container").style.display = "none";
  }*/
  console.log("dragStorage.id is", dragStorage.id);
  document
    .querySelector(`#${dragStorage.id}`)
    .addEventListener("click", rotateShip);
}

export function addDragListeners() {
  console.log("addDragListeners!");
  const draggables = document.querySelectorAll(".draggable");
  console.log("draggables = ", draggables);
  for (let i = 0; i < draggables.length; i++) {
    const element = draggables[i];
    console.log("element is: ", element);
    element.addEventListener("dragstart", drag);
  }
  const squares = document.querySelectorAll(".placement-grid-square");
  console.log("squares = ", squares);
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.addEventListener("drop", drop);
    element.addEventListener("dragover", allowDrop);
  }
}

export function buildShipPlacement() {
  document.querySelector(".content").innerHTML = "";
  for (let i = 0; i < shipPlacement.length - 1; i += 1) {
    const element = shipPlacement[i];
    componentFactory(element);
  }
  buildGrid(1);
  buildShips();
  addDragListeners();
}

// gets the DOM nodes' info for the first screen from displayObjects
// and draws them

export function allowDrop(e) {
  e.preventDefault();
}

export function buildInterface() {
  displayObjects.forEach((element) => {
    componentFactory(element);
  });
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
}

export function drag(e) {
  dragStorage = e.target;
  console.log("drag! e.target = ", e.target);
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", this.dragStorage);
}

class Interface {
  constructor() {
    this.componentFactory = componentFactory;
    this.buildGrid = buildGrid;
    this.buildShips = buildShips;
    this.rotateShip = rotateShip;
    this.cpuAttack = cpuAttack;
    this.removeAttackListeners = removeAttackListeners;
    this.attack = attack;
    this.addAttackListeners = addAttackListeners;
    this.markSquareHit = markSquareHit;
    this.buildMainGame = buildMainGame;
    this.drop = drop;
    this.addDragListeners = addDragListeners;
    this.buildShipPlacement = buildShipPlacement;
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.dragStorage = [];
  }
}

const iface = new Interface();

export { iface };
