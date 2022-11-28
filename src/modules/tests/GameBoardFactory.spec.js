import { GameBoardFactory } from "@/modules/GameBoardFactory";

describe("Game Board", () => {
  const gb = GameBoardFactory();
  test("Returns an object", () => {
    expect(gb).toBeTruthy();
    expect(typeof gb).toBe("object");
  });
  test("gb.board Returns a 2d array", () => {
    expect(gb.gameBoard.board[0][0]).toBeTruthy();
  });
  console.log("gb is", gb);
  /*test("Returns an object", () => {
    expect(gb).toBe("object");
  });*/

  test.skip("Placing Battleship at [0, 0] works", () => {
    // The following test should return an array which is populated with the results of
    // an internal check that the ship placement has been successful
    expect(gb.placeShip(6, [0, 0], true)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
});
