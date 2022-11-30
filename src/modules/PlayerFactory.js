export const PlayerFactory = (type) => {
  const playerType = type;
  return {
    playerType,
    placeShip(x, y, horizVert, shipType) {
      positionShip(x, y, horizVert, shipType, playerType);
      return "placing ship! woooooooo!";
      //return (placeShip(x, y, horizVert, shipType, this.playerType));
    },
  };
};
