import { GameBoardFactory } from "@/modules/GameBoardFactory";
import { PlayerFactory } from "@/modules/PlayerFactory";

export const controller = (() => {
  const playerOne = PlayerFactory(1);
  const playerTwo = PlayerFactory(2);
  const playerOneBoard = GameBoardFactory();
  const playerTwoBoard = GameBoardFactory();

  const positionShip = (x, y, horizVert, shipType, player) => {
    if (player === 1) {
      return playerOneBoard.gameBoard.placeShipOnBoard(
        x,
        y,
        horizVert,
        shipType
      );
    } else {
      return playerTwoBoard.gameBoard.placeShipOnBoard(
        x,
        y,
        horizVert,
        shipType
      );
    }
  };

  return {
    playerOne,
    playerTwo,
  };
})();
