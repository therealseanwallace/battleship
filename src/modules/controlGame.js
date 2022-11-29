import { GameBoardFactory } from "@/modules/GameBoardFactory";
import { playerFactory } from "@/modules/PlayerFactory";

export const controller = (() => {
  const playerOneBoard = GameBoardFactory();
  const playerTwoBoard = GameBoardFactory();

  return {
    placeShip(x, y, horizVert, shipType, player) {
      if (player === 1) {
        return playerOneBoard.gameBoard.placeShipOnBoard(x, y, horizVert, shipType);
      } else {
        return playerTwoBoard.gameBoard.placeShipOnBoard(x, y, horizVert, shipType);
      }
    },
  };
})();
