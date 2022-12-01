import { GameBoardFactory } from "./GameBoardFactory";

export const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    const playerType = type;
    const board = GameBoardFactory();
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);

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
