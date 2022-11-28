export const ShipFactory = (() => {
  let shipCounter = -1;
  const ShipFactory = (shipType) => {
    shipCounter += 1;
    const shipID = shipCounter;
    let type;
    let length;
    let hp;
    let sunk = false;
    switch (shipType) {
      case 1: 
        type = 'Sink test';
        length = 6;
        hp = 1;
        break;
  
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
      hit() {
        hp = hp -1;
        if (hp === 0) { sunk = true };
        return [hp, this.checkSunk()];
      },
      checkSunk() {
        return sunk;
      },
      
    }
  }
  return { ShipFactory }
})();
