import { playerFactory } from "./playerFactory";

export const controller = (() => {
  const { human, cpu } = playerFactory();

  const placeShip = (x, y, horizVert, type, player) => {
    console.log("placeShip! args are ", x, y, horizVert, type, player);
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

  const rotateShip = (x, y) => {
    console.log('human.board.gameBoard is, ', human.board.gameBoard);
    console.log('human.board.gameBoard.rotateShipinStorage is, ', human.board.gameBoard.rotateShipinStorage);
    const result = human.board.gameBoard.rotateShipinStorage(x, y);
    console.log('result is, ', result);
    //return human.board.gameBoard.rotateShipinStorage(x, y);
  }
    

  return { placeShip, attack, rotateShip };
})();
