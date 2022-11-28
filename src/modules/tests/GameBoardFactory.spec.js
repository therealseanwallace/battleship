import { GameBoardFactory } from "@/modules/GameBoardFactory";

describe("Game Board", () => {
  const gb = GameBoardFactory();
  test("Returns an object", () => {
    expect(gb).toBeTruthy();
    expect(typeof gb).toBe("object");
  });
  test("gb.gameBoard.board Returns a 2d array", () => {
    expect(gb.gameBoard.board[0][0]).toBeTruthy();
  });
  test("Placing Battleship at [0, 0] works", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 0, 0, 6)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
  test("Placing Battleship at [7, 0] works", () => {
    expect(gb.gameBoard.placeShipOnBoard(7, 0, 0, 6)).toStrictEqual('Error. Illegal move');
  });
  test("Placing ships vertically works", () => {
    expect(gb.gameBoard.placeShipOnBoard(0, 0, 1, 6)).toStrictEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ]);
  });
});
