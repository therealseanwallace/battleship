import { displayObjects } from "./displayObjects";
import { componentFactory } from "./componentFactory";

const buildShipPlacement = () => {
  
}

export const buildInterface = () => {
  for (let i = 0; i < displayObjects.length; i += 1) {
    const element = displayObjects[i];
    componentFactory(element);
  }
  document.querySelector(".start-button").addEventListener('click', )
};