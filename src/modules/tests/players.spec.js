import { playerFactory } from "@/modules/players";

describe("Players", () => {
  // Should return a player object with the appropriate methods and
  // attributes
  const testPlayers = playerFactory();
  test("Returns an array with two player objects with a gameBoard", () => {
    expect(testPlayers[0].gameBoard).toBeTruthy();
    expect(testPlayers[1].gameBoard).toBeTruthy();
  });
  test("Returns a playerType attribute", () => {
    expect(testPlayers[0].playerType).toStrictEqual(1);
    expect(testPlayers[1].playerType).toStrictEqual(2);
  });
  test("Gameboards don't have a fake method", () => {
    expect(testPlayers[0].gameBoard.fakeMethod).toStrictEqual(undefined);
  });
  test("Gameboards have appropriate methods", () => {
    // this doesn't pass as I expected
    expect(testPlayers[0].gameBoard.placeShipOnBoard).toBeTruthy();
  });
});
