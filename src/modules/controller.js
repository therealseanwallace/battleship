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

  const gameFlow = (isFirstTurn) => {
    if (isFirstTurn) {
      if (flipCoin() === 0) {
        console.log('human goes first');
        return 1;
      }
      console.log('cpu goes first');
      const cpuAttackResult = cpu.attack();
      console.log('cpu attack result is', cpuAttackResult);
      return cpuAttackResult;
    }    
      
  }

  return { gameFlow, human, cpu };
})();
