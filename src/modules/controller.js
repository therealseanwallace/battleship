import { playerFactory } from "@/modules/playerFactory";

export const controller = (() => {
  const { human, cpu } = playerFactory();
  const placeShip = (x, y, horizVert, type, player) => {
    if (player === 1) {
      return human.board.gameBoard.placeShipOnBoard(x, y, horizVert, type);
    }
    return cpu.board.gameBoard.placeShipOnBoard(x, y, horizVert, type);
  };
  const attack = (x, y, player) => {
    if (player === 1) {
      return human.board.gameBoard.receiveAttack(x, y);
    }
    return cpu.board.gameBoard.receiveAttack(x, y);
  };
  return { placeShip, attack };
})();
