import { GameBoardFactory } from "./GameBoardFactory";
import { flipCoin } from "./helpers";

export const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    const playerType = type;
    const board = GameBoardFactory();
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);
  
  function randomxy() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
  
  function populateCPUBoard() { 
    const placeBattleship = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, flipCoin(), 6)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeBattleship();
    }
    const placeCruiser = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, flipCoin(), 4)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeCruiser();  
    }
    const placeDestroyer = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, flipCoin(), 3)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeDestroyer();
     }
    const placeFrigate = () => { 
      const x = randomxy()[0];
      const y = randomxy()[1];
      const placement = cpu.board.gameBoard.placeShipOnBoard(x, y, flipCoin(), 2)
      if (typeof placement === 'object') {
        return placement;
      }
      return placeFrigate();
     }
    placeBattleship();
    placeCruiser();
    placeDestroyer();
    placeFrigate();
  }

  cpu.board.gameBoard.populateCPUBoard = populateCPUBoard;
  cpu.board.gameBoard.populateCPUBoard();
  
  
  const cpuAttack = () => {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    return human.board.gameBoard.receiveAttack(x, y);
  };

  const humanAttack = (x, y) => cpu.board.gameBoard.receiveAttack(x, y);

  human.attack = humanAttack;
  cpu.attack = cpuAttack;

  return { human, cpu };
};
