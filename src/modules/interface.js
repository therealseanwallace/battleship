import { displayObjects, shipPlacement } from "./displayObjects";
import { componentFactory } from "./componentFactory";

// builds the ship placement screen



const buildGrid = () => {
  let sqNum = 0;
  for (let i = 9; i > -1; i --) {
    for (let j = 0; j < 10; j++) {
      const newSquare = shipPlacement[4];
      console.log('newSquare! i is: ', i, 'j is: ', j);
      newSquare.xy = [j, i, sqNum];
      sqNum += 1;
      console.log('newSquare = ', newSquare);
      componentFactory(newSquare);
    }  
  }
}

const buildShips = () => {

}


const buildShipPlacement = () => {
  document.querySelector('.content').innerHTML= "";
  for (let i = 0; i < 4; i += 1) {
    const element = shipPlacement[i];
    componentFactory(element);
  }
  buildGrid();
};

// gets the DOM nodes' info for the first screen from displayObjects
// and draws them

export const buildInterface = () => {
  displayObjects.forEach((element) => {
    componentFactory(element);
  });
  document.querySelector(".start-button").addEventListener('click', buildShipPlacement)
};