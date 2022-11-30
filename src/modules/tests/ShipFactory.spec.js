import { ShipFactory } from "@/modules/ShipFactory";

describe("ShipFactory", () => {
  const testBattleship = ShipFactory.ShipFactory(6);
  const testCruiser = ShipFactory.ShipFactory(4);
  const testDestroyer = ShipFactory.ShipFactory(3);
  const testFrigate = ShipFactory.ShipFactory(2);
  const sinkTest = ShipFactory.ShipFactory(1);
  test("Returns an object", () => {
    expect(typeof testBattleship).toBe("object");
  });
  test("Battleship has correct attributes", () => {
    expect(testBattleship.type).toStrictEqual("Battleship");
    expect(testBattleship.length).toStrictEqual(6);
    expect(testBattleship.hp).toStrictEqual(6);
    expect(testBattleship.sunk).toStrictEqual(false);
  });
  test("Remaining ship types have correct attributes", () => {
    expect(testCruiser.type).toStrictEqual("Cruiser");
    expect(testCruiser.length).toStrictEqual(4);
    expect(testCruiser.hp).toStrictEqual(4);
    expect(testCruiser.sunk).toStrictEqual(false);
    expect(testDestroyer.type).toStrictEqual("Destroyer");
    expect(testDestroyer.length).toStrictEqual(3);
    expect(testDestroyer.hp).toStrictEqual(3);
    expect(testDestroyer.sunk).toStrictEqual(false);
    expect(testFrigate.type).toStrictEqual("Frigate");
    expect(testFrigate.length).toStrictEqual(2);
    expect(testFrigate.hp).toStrictEqual(2);
    expect(testFrigate.sunk).toStrictEqual(false);
  });
  test("Hit method works correctly", () => {
    expect(testBattleship.hit()).toStrictEqual([true, 5, false]);
  });
  test("Hit method works correctly when ship has 1hp", () => {
    expect(sinkTest.hit()).toStrictEqual([true, 0, true]);
  });
});
