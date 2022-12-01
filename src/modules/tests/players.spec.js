import { playerFactory } from "@/modules/playerFactory";

describe("Players", () => {
  // Should return a player object with the appropriate methods and
  // attributes
  const testPlayers = playerFactory();
  test("Returns an array with two player objects with a gameBoard", () => {
    expect(testPlayers.human.board).toBeTruthy();
    expect(testPlayers.cpu.board).toBeTruthy();
    expect(testPlayers.cpu.board.gameBoard).toBeTruthy();
  });
  test("Returns a playerType attribute", () => {
    expect(testPlayers.human.playerType).toStrictEqual(1);
    expect(testPlayers.cpu.playerType).toStrictEqual(2);
  });
  test("Gameboards don't have a fake method", () => {
    expect(testPlayers.human.board.gameBoard.fakeMethod).toStrictEqual(undefined);
  });
  test("Gameboards have appropriate methods", () => {
    expect(testPlayers.human.board.gameBoard.placeShipOnBoard).toBeTruthy();
  });
  test("Placing a ship works", () => {
    // this doesn't pass as I expected
    expect(
      testPlayers.human.board.gameBoard.placeShipOnBoard(0, 0, 0, 6)
    ).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
  test("Hitting the test battleship returns correct result", () => {
    expect(testPlayers.human.board.gameBoard.receiveAttack(0, 0)).toStrictEqual([
      true,
      5,
      false,
    ]);
  });
  test("Attacking returns false if there are surviving ships", () => {
    expect(testPlayers.human.board.gameBoard.checkFleetSunk()).toStrictEqual(false);
  });
  test("Computer players have a cpuAttack method", () => {
    expect(testPlayers.human.attack).toBeTruthy();
  });
  test("Human players have a humanAttack method", () => {
    expect(testPlayers.cpu.attack).toBeTruthy();
  });
});
