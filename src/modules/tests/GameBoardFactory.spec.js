import { GameBoardFactory } from "@/modules/GameBoardFactory";
const gb = GameBoardFactory();

describe("Game Board", () => {
  test("Returns an object", () => {
    expect(gb).toBeTruthy();
    expect(typeof gb).toBe("object");
  });
  test("gb.gameBoard.board Returns a 2d array", () => {
    expect(gb.gameBoard.board[0][0]).toBeTruthy();
  });
});

describe("Placing ships", () => {
  test("Placing Battleship horizontally at [0, 0] works", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 0, 0, 6)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
  test("Placing ship out of bounds horizontally returns error", () => {
    expect(gb.gameBoard.placeShipOnBoard(7, 0, 0, 6)).toStrictEqual(
      "Error! Can't place ship out of bounds!");
  });
  test("Placing ships vertically works", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 5, 1, 4)).toStrictEqual([
      [0, 5],
      [0, 6],
      [0, 7],
      [0, 8],
    ]);
  });
  test("Placing ship out of bounds vertically returns error", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 8, 1, 4)).toStrictEqual(
      "Error! Can't place ship out of bounds!");
  });
  test("Placing a ship on top of another ship returns an error", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 5, 1, 4)).toStrictEqual(
      "Error! Can't place a ship on top of another ship!"
    );
  });
});

describe("Attacking ships", () => {
  // We need a function on the board that will take a hit, check
  // the board array to see if that was a hit. If a hit is detected,
  // it should call the hit method on the relevant ship and return 
  // true & the new hp of the ship
  test.skip("Hitting the test battleship returns correct result", () => {
    expect(gb.gameBoard.receiveAttack(0, 0)).toStrictEqual([true, 5]);
  });
  
});
