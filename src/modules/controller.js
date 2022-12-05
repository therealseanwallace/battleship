import { playerFactory } from "./playerFactory";
import { flipCoin } from "./helpers";

export const controller = (() => {
  const { human, cpu } = playerFactory();

  /*const attack = (x, y, player) => {
    if (player === 1) {
      return human.board.gameBoard.receiveAttack(x, y);
    }
    return cpu.board.gameBoard.receiveAttack(x, y);
  };*/
  const startGame = () => {
    for (let index = 0; index < 100; index++) {
      if (flipCoin() === 0) {
        console.log('human goes first');
        return 1;
      }
      
      
    }
  }

  return { startGame, human, cpu };
})();
