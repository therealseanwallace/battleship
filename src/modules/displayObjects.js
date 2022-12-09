export const displayObjects = [
  {
    name: "main",
    nodeType: "main",
    parent: "body",
  },
  {
    name: "gameContainer",
    nodeType: "div",
    parent: "main",
    class1: "game-container",
  },
  {
    name: "notifArea",
    nodeType: "div",
    parent: ".game-container",
    class1: "notif-area",
  },
  {
    name: "notifUpper",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-upper",
  },
  { 
    name: "notifLower",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-lower",
  },
  {
    name: "mainTitle",
    nodeType: "h1",
    parent: ".notif-upper",
    class1: "title",
    text: "BATTLESHIP",
  },
  {
    name: "notifs",
    nodeType: "h3",
    parent: ".notif-lower",
    class1: "notifs",
    text: "",
  },
  {
    name: "startButton",
    nodeType: "input",
    parent: ".game-container",
    class1: "start-button",
    inputType: "button",
    value: "Start",
  },
]

export const shipPlacement = [
  {
    name: "placementContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "placement-container",
  },
  {
    name: "shipPlacementContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "ship-placement-container",
  },
  {
    name: "bShipContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "bship-container",
    class2: "ship-container",
  },
  {
    name: "cruiserContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "cruiser-container",
    class2: "ship-container",
  },
  {
    name: "destroyerContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "destroyer-container",
    class2: "ship-container",
  },
  {
    name: "frigateContainer",
    nodeType: "div",
    parent: ".ship-placement-container",
    class1: "frigate-container",
    class2: "ship-container",
  },
  {
    name: "gridContainer",
    nodeType: "div",
    parent: ".placement-container",
    class1: "grid-container",
  },
  {
    name: "humanGrid",
    nodeType: "div",
    parent: ".grid-container",
    class1: "placement-grid",
  },
  {
    name: "cpuBoard",
    nodeType: "div",
    parent: ".grid-container",
    class1: "cpu-board",
  },
  {
    name: "placementGridSquare",
    nodeType: "div",
    parent: ".placement-grid",
    class1: "placement-grid-square",
  }
]

export const ships = [
  {
    name: "Battleship",
    nodeType: "div",
    parent: ".bship-container",
    class1: "battleship-placement",
  },
  {
    name: "Cruiser",
    nodeType: "div",
    parent: ".cruiser-container",
    class1: "cruiser-placement",
  },
  {
    name: "Destroyer",
    nodeType: "div",
    parent: ".destroyer-container",
    class1: "destroyer-placement",
  },
  {
    name: "Frigate",
    nodeType: "div",
    parent: ".frigate-container",
    class1: "frigate-placement",
  },
]