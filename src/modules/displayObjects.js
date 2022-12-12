export const displayObjects = [
  {
    name: "main",
    nodeType: "main",
    parent: "body",
  },
  {
    name: "bezel",
    nodeType: "div",
    parent: "main",
    class1: "bezel",
  },
  {
    name: "gameContainer",
    nodeType: "div",
    parent: ".bezel",
    class1: "game-container",
  },
  {
    name: "scanline",
    nodeType: "div",
    parent: ".game-container",
    class1: "scanline",
  },
  {
    name: "titleContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "title-container",
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
    class1: "notif-left",
  },
  {
    name: "notifLower",
    nodeType: "div",
    parent: ".notif-area",
    class1: "notif-right",
  },
  {
    name: "mainTitle",
    nodeType: "h1",
    parent: ".title-container",
    class1: "title",
    text: "BATTLESHIP",
  },
  {
    name: "placementContainer",
    nodeType: "div",
    parent: ".game-container",
    class1: "placement-container",
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
    name: "startButton",
    nodeType: "input",
    parent: ".game-container",
    class1: "start-button",
    inputType: "button",
    value: "START",
  },
  {
    name: "placementGridSquare",
    nodeType: "div",
    parent: ".placement-grid",
    class1: "placement-grid-square",
  },
];

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
];

export const notifs = [
  {
    name: "notifHuman",
    nodeType: "h3",
    parent: ".notif-left",
    class1: "notif",
    class2: "notif-human",
  },
  {
    name: "notifCpu",
    nodeType: "h3",
    parent: ".notif-right",
    class1: "notif",
    class2: "notif-cpu",
  },
];
