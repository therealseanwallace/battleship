/* eslint-disable no-shadow */
export const ShipFactory = (() => {
  let shipCounter = -1;
  const ShipFactory = (shipType) => {
    console.log('shipFactory! shipType is ', shipType);
    shipCounter += 1;
    const shipID = shipCounter;
    let type;
    let length;
    let hp;
    let sunk = false;
    switch (shipType) {
      /*case 1:
        type = "Sink test";
        length = 6;
        hp = 1;
        break;*/

      case 2:
        console.log('is frigate');
        type = "Frigate";
        length = 2;
        hp = 2;
        break;

      case 3:
        console.log('is Destroyer');
        type = "Destroyer";
        length = 3;
        hp = 3;
        break;

      case 4:
        console.log('is Cruiser');
        type = "Cruiser";
        length = 4;
        hp = 4;
        break;

      default:
        console.log('is Battleship');
        type = "Battleship";
        length = 6;
        hp = 6;
        break;
    }
    return {
      type,
      length,
      hp,
      sunk,
      shipID,
      checkSunk() {
        return sunk;
      },
      hit() {
        hp -= 1;
        if (hp === 0) {
          sunk = true;
        }
        return [true, hp, this.checkSunk()];
      },
    };
  };
  return { ShipFactory };
})();
