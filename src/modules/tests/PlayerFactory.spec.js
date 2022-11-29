import { PlayerFactory } from "@/modules/PlayerFactory";


describe("Players", () => {
  // Should return a player object with the appropriate methods and
  // attributes
  const testPlayer = PlayerFactory(1)
  console.log(testPlayer)
  console.log(testPlayer.playerType)
  console.log(testPlayer.attack())
  test("Returns a player object with an attack method", () => {
    expect(testPlayer.attack()).toBeTruthy();
  });
  test("Returns a playerType atrribute", () => {
    expect(testPlayer.playerType).toStrictEqual(1);
  });
});