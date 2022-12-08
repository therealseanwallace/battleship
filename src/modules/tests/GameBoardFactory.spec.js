import { playerBoard, cpuBoard } from "@/modules/GameBoardFactory";

const pb = playerBoard;
const gb = cpuBoard;

describe("Game Board", () => {
  console.log('gb is', gb)
  console.log('gb.board is', gb.board);
  test("Returns an object", () => {
    expect(gb).toBeTruthy();
    expect(typeof gb).toBe("object");
  });
  test("gb.board Returns a 2d array", () => {
    expect(gb.board[0][0]).toBeTruthy();
  });
});

describe("Placing ships", () => {
  test("Placing Battleship horizontally at [0, 0] works", () => {
    expect(gb.placeShipOnBoard(0, 0, 0, 6)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
  test("Placing ship out of bounds horizontally returns false", () => {
    expect(gb.placeShipOnBoard(7, 0, 0, 6)).toStrictEqual(
      false
    );
  });
  test("Placing ships vertically works", () => {
    expect(gb.placeShipOnBoard(0, 5, 1, 4)).toStrictEqual([
      [0, 5],
      [0, 4],
      [0, 3],
      [0, 2],
    ]);
  });
  test("Placing ship out of bounds vertically returns false", () => {
    expect(gb.placeShipOnBoard(0, 8, 1, 4)).toStrictEqual(
      false
    );
  });
  test("Placing a ship on top of another ship returns false", () => {
    expect(gb.placeShipOnBoard(0, 5, 1, 4)).toStrictEqual(
      false
    );
  });
  test("Rotating a ship returns the expected output", () => { 
    expect(gb.rotateShipinStorage(0, 5)).toStrictEqual([
      [0, 5],
      [0, 4],
      [0, 3],
      [0, 2],
    ]);
  }
  )
});

describe("Attacking", () => {
  test("Hitting the test battleship returns correct result", () => {
    expect(gb.receiveAttack([0, 0])).toStrictEqual("hit");
  });
  test("Hitting an empty square returns correct result", () => {
    expect(gb.receiveAttack([6, 6])).toStrictEqual("miss");
  });
  test("Hitting an already-hit square returns correct result", () => {
    expect(gb.receiveAttack([6, 6])).toStrictEqual(false);
  });
  test("Returns false if there are surviving ships", () => {
    expect(gb.checkFleetSunk()).toStrictEqual(false);
  });
});
