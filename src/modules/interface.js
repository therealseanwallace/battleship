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
      const newSquare = displayObjects[displayObjects.length - 1];
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
  document.querySelector(".notif-left").innerHTML =
    "Ships placed! Click start to begin!";
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
    }
  }
}

export function removeAttackListeners() {
  const squares = document.querySelectorAll(".cpu-grid-square");
  squares.forEach((square) => {
    square.removeEventListener("click", attack);
  });
}

function attack(e) {
  console.log("e.target is", e.target);
  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  console.log("x is", x);
  console.log("y is", y);
  pubSub.pub("playersMove", [x, y]);
  removeAttackListeners();
  setTimeout(addAttackListeners, 100);
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
    addNotif("The computer sunk your ship!", 2);
  } else {
    addNotif("You sunk an enemy ship!", 2);
  }
}

export function updateNotsDisplay() {
  // select and clear both the human and cpu notification displays

  const leftNotifs = document.querySelector(".notif-left");
  leftNotifs.innerHTML = "";

  const rightNotifs = document.querySelector(".notif-right");
  rightNotifs.innerHTML = "";

  // initialize two strings to hold the html for the notifications
  let leftResult = "";
  let rightResult = "";

  // get the notification arrays
  const { instructions, gameNots } = this;

  // assemble the html for the notifications
  for (let i = 0; i < instructions.length; i++) {
    leftResult += `<h3 class="notif instruction">${instructions[i]}></h3>`;
  }
  for (let i = 0; i < gameNots.length; i++) {
    rightResult += `<h3 class="notif cpu-notif">${gameNots[i]}></h3>`;
  }

  // write the html to the notification displays
  leftNotifs.innerHTML = leftResult;
  rightNotifs.innerHTML = rightResult;
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
    if (isOccupied) {
      square.classList.add("hit-occupied");
      addNotif("The computer hit your ship!", 2);
    } else {
      square.classList.add("hit-empty");
      addNotif("The computer hit an empty square!", 2);
    }
  } else {
    square = document.querySelector(`.cpu-grid-square-${x}-${y}`);
    console.log("cpu square is", square);
    if (isOccupied) {
      square.classList.add("hit-occupied");
      addNotif("You hit an enemy ship!", 2);
    } else {
      square.classList.add("hit-empty");
      addNotif("You hit an empty square!", 2);
    }
  }
}

export function invalidMove() {
  document.querySelector(".player-alert").textContent =
    "You tried to attack an invalid square!";
}

export function gameOver(message) {
  console.log('gameOver called!')
  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif instruction">Game Over!</h2>';
  document.querySelector(".notif-right").innerHTML =
  `<h2 class="notif instruction">${message}</h2>`;
}

export function startGame() {
  // clear the notification area
  document.querySelector(".notif-left").innerHTML = "";

  // tell the controller to start the game
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

  // remove start button
  document.querySelector(".start-button").remove();

  // add the attack event listeners to the cpu board
  bindAddAttackListeners();
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
  addNotif("Your move! Please attack an enemy square by clicking.", 1);
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
  document
    .querySelector(".start-button")
    .removeEventListener("click", buildShipPlacement);
  addDragListeners();

  // Sends the player a message to place ships
  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif human-notif">Drag and drop to place your ships! Click its left square to rotate a placed ship.</h2>';
}

// Get the DOM nodes' info for the first screen from displayObjects
// and draws them

export function allowDrop(e) {
  e.preventDefault();
}

export function buildInterface() {
  for (let i = 0; i < displayObjects.length - 1; i++) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
  buildGrid(1);
  buildGrid(2);
  buildShips();

  // add welcome message to the notification area

  document.querySelector(".notif-left").innerHTML =
    '<h2 class="notif notif-human">Welcome to Battleship! Click Start to place your ships!</h2>';
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
    this.allowDrop = allowDrop;
    this.buildInterface = buildInterface;
    this.placedRight = placedRight;
    this.instructions = [];
    this.gameNots = [];
    this.updateNotsDisplay = updateNotsDisplay;
    this.markSquare = markSquare;
  }

  addNotif(notif, player) {
    if (player === 1) {
      if (this.instructions.length > 2) {
        this.instructions.shift();
      }
      this.instructions.push(notif);
    } else {
      if (this.gameNots.length > 2) {
        this.gameNots.shift();
      }
      this.gameNots.push(notif);
    }
    this.updateNotsDisplay();
  }
}

const iface = new Interface();

const addNotif = iface.addNotif.bind(iface);
const bindAddAttackListeners = iface.addAttackListeners.bind(iface);

function markSquare(square) {
  const mark = iface.markSquareHit.bind(iface);
  mark(square);
}

export { iface };
