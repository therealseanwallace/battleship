import { displayObjects, shipPlacement, ships, cpu } from "./displayObjects";
import Cruiser from "../resources/Cruiser.png";
import Battleship from "../resources/Battleship.png";
import Destroyer from "../resources/Destroyer.png";
import Frigate from "../resources/Frigate.png";
import { controller } from "./controller";
// builds the ship placement screen

const componentFactory = (element) => {
  const {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    class3,
    taskID,
    placeholder,
    id,
    xy,
  } = element;
  const createDOMNode = () => {
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(nodeType);
    if (text) {
      newDOMNode.innerHTML = text;
    }
    if (inputType) {
      newDOMNode.type = inputType;
    }
    if (value) {
      newDOMNode.value = value;
    }
    if (class1) {
      newDOMNode.classList.add(class1);
    }
    if (class2) {
      newDOMNode.classList.add(class2);
    }
    if (class3) {
      newDOMNode.classList.add(class3);
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    if (text) {
      newDOMNode.textContent = text;
    }
    if (id) {
      console.log("element has id! id = ", id);
      newDOMNode.id = id;
    }

    if (xy) {
      newDOMNode.dataset.x = xy[0];
      newDOMNode.dataset.y = xy[1];
      newDOMNode.dataset.sqnum = xy[2];
      newDOMNode.dataset.player = xy[3];
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    taskID,
  };
};

const buildGrid = (player) => {
  let sqNum = 0;
  for (let i = 9; i > -1; i--) {
    for (let j = 0; j < 10; j++) {
      const newSquare = shipPlacement[shipPlacement.length - 1];
      newSquare.xy = [j, i, sqNum, player];
      sqNum += 1;
      if (player === 1) {
        newSquare.class2 = "player-grid-square";
      } else {
        newSquare.class2 = "cpu-grid-square";
        newSquare.parent = ".cpu-board";
      }
      componentFactory(newSquare);
    }
  }
};

const buildShips = () => {
  for (let i = 0; i < 4; i += 1) {
    const element = ships[i];

    componentFactory(element);
    switch (element.name) {
      case "Battleship":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Battleship} alt=${element.name} draggable="true" class="draggable" id="Battleship" data-length="6" data-orientation="0">`;
        break;

      case "Cruiser":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Cruiser} alt=${element.name} draggable="true" class="draggable" id="Cruiser"  data-length="4" data-orientation="0">`;
        break;

      case "Destroyer":
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Destroyer} alt=${element.name} draggable="true" class="draggable" id="Destroyer"  data-length="3" data-orientation="0">`;
        break;

      default:
        document.querySelector(`.${element.class2}`).innerHTML = `
        <img src=${Frigate} alt=${element.name} draggable="true" class="draggable" id="Frigate"  data-length="2" data-orientation="0">`;
        break;
    }
  }
};

let dragStorage = [];
let placedShipsCount = 0;

const rotateShipinStorage = (x, y) => {
  controller.rotateShipinStorage();
};

const rotateShip = (e) => {
  console.log("rotateShip! e.target is", e.target);
  console.log("rotateShip! controller.human.board.gameBoard is", controller.human.board.gameBoard);
  const ship = e.target;
  console.log("rotateShip! ship is", ship);
  const parent = ship.parentNode;
  const parentX = Number(parent.dataset.x);
  const parentY = Number(parent.dataset.y);
  switch (Number(e.target.dataset.length)) {
    case 6:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("battleship-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("battleship-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 4:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("cruiser-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("cruiser-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    case 3:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("destroyer-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("destroyer-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
      break;

    default:
      if (ship.dataset.orientation === "0") {
        ship.dataset.orientation = "1";
        ship.style.transform = "rotate(90deg)";
        ship.classList.add("frigate-rotated");
      } else {
        ship.dataset.orientation = "0";
        ship.style.transform = "rotate(0deg)";
        ship.classList.remove("frigate-rotated");
      }
      controller.human.board.gameBoard.rotateShip(parentX, parentY);
  }
};

const drag = (e) => {
  dragStorage = e.target;
  console.log("drag! ev.target = ", e.target);
  e.dataTransfer.setData("img", e.target.id);
  console.log("dragStorage is", dragStorage);
};

const addAttackListeners = () => { 
  console.log("addAttackListeners!)")
  const gridSquares = document.querySelectorAll(".cpu-grid-square");
  gridSquares.forEach((square) => {
    square.addEventListener("click", (e) => {
      console.log("e.target is", e.target);
      const x = Number(e.target.dataset.x);
      const y = Number(e.target.dataset.y);
      console.log("x is", x);
      console.log("y is", y);
      const humanAttackResult = controller.human.attack(x, y);
      console.log("humanAttackResult is", humanAttackResult);
    });
  });
}

const buildMainGame = () => { 
  const startGame = document.querySelector('.start-game');
  startGame.style.display = 'none';
  componentFactory(cpu[0]);
  buildGrid(2);
  controller.gameFlow(true);
  addAttackListeners();
}

const drop = (e) => {
  console.log("drop! ev.target = ", e.target);
  console.log("controller is", controller);
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
  console.log(
    "placing ship! result is",
    controller.human.board.gameBoard.placeShipOnBoard(
      Number(e.target.dataset.x),
      Number(e.target.dataset.y),
      Number(dragStorage.dataset.orientation),
      Number(dragStorage.dataset.length)
    )
  );
  placedShipsCount += 1;
  console.log('placedShipsCount is', placedShipsCount);
  if (placedShipsCount === 4) {
    const startGame = document.querySelector('.start-game');
    startGame.style.display = "block";
    startGame.addEventListener('click', buildMainGame);
    document.querySelector(".ships-container").style.display = "none";
  }
  console.log("dragStorage.id is", dragStorage.id);
  document
    .querySelector(`#${dragStorage.id}`)
    .addEventListener("click", rotateShip);
};

const addDragListeners = () => {
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
};

const buildShipPlacement = () => {
  document.querySelector(".content").innerHTML = "";
  for (let i = 0; i < shipPlacement.length - 1; i += 1) {
    const element = shipPlacement[i];
    componentFactory(element);
  }
  buildGrid(1);
  buildShips();
  addDragListeners();
};

// gets the DOM nodes' info for the first screen from displayObjects
// and draws them

export const allowDrop = (e) => {
  e.preventDefault();
};

export const buildInterface = () => {
  displayObjects.forEach((element) => {
    componentFactory(element);
  });
  document
    .querySelector(".start-button")
    .addEventListener("click", buildShipPlacement);
};
