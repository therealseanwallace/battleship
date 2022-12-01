import {
  GameBoardFactory,
} from "./GameBoardFactory";

export const playerFactory = () => {
  const innerPlayerFactory = (type) => {
    const playerType = type;
    const board = GameBoardFactory();
    console.log("playerFactory! board =", board);
    return { playerType, board };
  };

  const human = innerPlayerFactory(1);
  const cpu = innerPlayerFactory(2);

  return [human, cpu];
};
