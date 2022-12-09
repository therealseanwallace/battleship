/* eslint-disable no-sequences */
import { componentFactory } from "./componentFactory";
import { displayObjects, shipPlacement, ships, cpu } from "./displayObjects";
import Cruiser from "../resources/Cruiser.png";
import Battleship from "../resources/Battleship.png";
import Destroyer from "../resources/Destroyer.png";
import Frigate from "../resources/Frigate.png";
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
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${Battleship} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-direction="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${Cruiser} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-direction="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${Destroyer} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-direction="0">`;
        break;

      default:
        document.querySelector(`.${element.class1}`).innerHTML = `
        <img src=${Frigate} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-direction="0">`;
        break;
    }
  }
}

export function shipsPlaced() {
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", startGame);
}

export function rotateShip(e) {
  console.log("rotateShip! e.target is", e.target);
  console.log("e.target.parentElement is", e.target.parentElement);
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  if (checkPlacement(ship.dataset.length)) {
    return;
  }
  const xy = [
    e.target.parentElement.dataset.x,
    e.target.parentElement.dataset.y,
  ];
  pubSub.pub("rotateShip", xy);

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
  }
}

export function cpuAttack() {
  let successfulAttack = false;
  while (!successfulAttack) {
    const thisAttack = controller.cpu.attack();
    if (thisAttack) {
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
  pubSub.pub("playersMove", [x, y]);

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
  console.log("sunk called! isPlayerBoard is", isPlayerBoard);
  if (!isPlayerBoard) {
    console.log("SHOULD BE WRITING TO CPU ALERT!");
    document.querySelector(".cpu-alert").textContent =
      "The computer sunk your ship!";
  } else {
    console.log("SHOULD BE WRITING TO PLAYER ALERT!");
    const playerAlert = document.querySelector(".player-alert");
    console.log("playerAlert.textContent is", playerAlert.textContent);
    playerAlert.textContent = "You sunk an enemy ship!";
    console.log("playerAlert.textContent is", playerAlert.textContent);
    /*document.querySelector(".player-alert").textContent =
      "You sunk an enemy ship!";*/
  }
}

export function markSquareHit(array) {
  console.log("markSquareHit! array is", array);
  let square;
  const x = array[0];
  const y = array[1];
  const isOccupied = array[2];
  const isPlayerBoard = array[3];

  if (isPlayerBoard) {
    square = document.querySelector(`.player-grid-square-${x}-${y}`);
    console.log("player square is", square);
    const upperNotifs = document.querySelector(".notifs-upper");
    if (isOccupied) {
      square.classList.add("hit-occupied");
      upperNotifstextContent = "The computer hit your ship!";
    } else {
      square.classList.add("hit-empty");
      upperNotifs.textContent = "The computer hit an empty square!";
    }
  } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("cpu square is", square);
    const lowerNotifs = document.querySelector(".notifs");
    if (isOccupied) {
      square.classList.add("hit-occupied");
      lowerNotifs.textContent = "You hit an enemy ship!";
    } else {
      square.classList.add("hit-empty");
      lowerNotifs.textContent = "You hit an empty square!";
    }
  }
}

export function invalidMove() {
  document.querySelector(".player-alert").textContent =
    "You tried to attack an invalid square!";
}

export function gameOver(message) {
  document.querySelector(".cpu-alert").textContent = "";
  document.querySelector(".player-alert").textContent = message;
}

export function startGame() {
  // removes the title and replaces it with another notification
  // h3
  document.querySelector(".notif-upper").innerHTML =
    '<h3 class="notifs-upper"></h3>';

  pubSub.pub("gameStart", "true");

  // remove ship-rotation event listeners
  const draggables = document.querySelectorAll(".draggable");
  for (let index = 0; index < draggables.length; index++) {
    const element = draggables[index];
    element.removeEventListener("click", rotateShip);
    element.removeEventListener("dragstart", drag);
  }

  // remove drop event listeners
  const squares = document.querySelectorAll(".placement-grid-square");
  console.log("squares = ", squares);
  for (let i = 0; i < squares.length; i++) {
    const element = squares[i];
    element.removeEventListener("drop", drop);
    element.removeEventListener("dragover", allowDrop);
  }
}

let dragStorage = "test";

let isBadlyPlaced = {
  6: true,
  4: true,
  3: true,
  2: true,
};

export function getPlayerMove() {
  // provide the player with some sort of prompt. for now, console
  document.querySelector(".notifs").textContent =
    "Your move! Please attack an enemy square by clicking.";
  addAttackListeners();
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
  // Remove the event listener to prevent running this function again
  document
    .querySelector(".start-button")
    .removeEventListener("click", buildShipPlacement);

  // Build the ship placement grids
  for (let i = 0; i < shipPlacement.length - 1; i += 1) {
    const element = shipPlacement[i];
    componentFactory(element);
  }
  buildGrid(1);
  buildGrid(2);
  buildShips();
  addDragListeners();

  // Sends the player a message to place their ships
  document.querySelector(".notifs").textContent =
    "Place your ships! Click to rotate a placed ship.";
}

// Get the DOM nodes' info for the first screen from displayObjects
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
  console.log("drag! e.target.parentElement = ", e.target.parentElement);
  if (e.target.parentElement.classList.contains("placement-grid-square")) {
    console.log("this is a square!");
    console.log(
      "e.target.parentElement.dataset.x = ",
      e.target.parentElement.dataset.x
    );
    console.log(
      "e.target.parentElement.dataset.y = ",
      e.target.parentElement.dataset.y
    );
    const x = Number(e.target.parentElement.dataset.x);
    const y = Number(e.target.parentElement.dataset.y);
    const result = [
      x,
      y,
      Number(e.target.dataset.direction),
      Number(e.target.dataset.length),
    ];
    pubSub.pub("moveShip", result);
  }
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", dragStorage);
}

function checkPlacement(ship) {
  return isBadlyPlaced[ship];
}

export function placedRight(ship) {
  console.log("placedRight called! isBadlyPlaced is: ", isBadlyPlaced);
  switch (ship) {
    case 6:
      isBadlyPlaced[6] = false;
      break;
    case 4:
      isBadlyPlaced[4] = false;
      break;
    case 3:
      isBadlyPlaced[3] = false;
      break;
    default:
      isBadlyPlaced[2] = false;
      break;
  }
  console.log("placedRight called! isBadlyPlaced is: ", isBadlyPlaced);
}

export function placedWrong(ship) {
  console.log("placedWrong called! isBadlyPlaced is: ", isBadlyPlaced);
  switch (ship) {
    case 6:
      isBadlyPlaced[6] = true;
      break;
    case 4:
      isBadlyPlaced[4] = true;
      break;
    case 3:
      isBadlyPlaced[3] = true;
      break;
    default:
      isBadlyPlaced[2] = true;
      break;
  }
  console.log("placedWrong! isBadlyPlaced is: ", isBadlyPlaced);
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
    this.startGame = startGame;
    this.drop = drop;
    this.addDragListeners = addDragListeners;
    this.buildShipPlacement = buildShipPlacement;
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.placedRight = placedRight;
  }
}

const iface = new Interface();

export { iface };
