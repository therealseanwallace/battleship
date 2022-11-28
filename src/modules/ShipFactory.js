export const ShipFactory = (shipType) => {
  let type;
  let length;
  let hp;
  const sunk = false;
  switch (shipType) {
    case 2:
      type = 'Frigate';
      length = 2;
      hp = 2;
      break;
    
    case 3:
      type = 'Destroyer';
      length = 3;
      hp = 3;
      break;
    
    case 4:
      type = 'Cruiser';
      length = 4;
      hp = 4;
      break;
    
    default:
      type = 'Battleship';
      length = 6;
      hp = 6;
      break;
  }
  return {
    type,
    length,
    hp,
    sunk,
  }
}