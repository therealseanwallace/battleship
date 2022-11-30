import { GameBoardFactory } from "./GameBoardFactory";

/*class Player {
  constructor(playerType) {
    this.playerType = playerType;
    this.gameBoard = GameBoardFactory();
  }
}*/

export const playerFactory = () => {
  const output = [];
  const innerPlayerFactory = (type) => {
    const playerType = type;
    const gameBoard = GameBoardFactory();
    return { playerType, gameBoard }
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);
  
  return [human, cpu];
};
