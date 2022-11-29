export const PlayerFactory = (type) => {
  const playerType = type;
  return {
    playerType,
    attack() {
      return 'attack!!!'
    },
  };
};
