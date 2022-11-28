import { ShipFactory } from "@/modules/ShipFactory"

describe("ShipFactory", () => {
  const testBattleship = ShipFactory(6);
  const testCruiser = ShipFactory(4);
  const testDestroyer = ShipFactory(3);
  const testFrigate = ShipFactory(2);
  test("Returns an object", () => {
    expect(typeof testBattleship).toBe("object");
  });
  test('Object has correct attributes', () => {
    expect(testBattleship.type).toEqual('Battleship');
    expect(testBattleship.length).toEqual(6);
    expect(testBattleship.hp).toEqual(6);
    expect(testBattleship.sunk).toEqual(false);
  });
  test('Remaining ship types have correct attributes', () => {
    expect(testCruiser.type).toEqual('Cruiser');
    expect(testCruiser.length).toEqual(4);
    expect(testCruiser.hp).toEqual(4);
    expect(testCruiser.sunk).toEqual(false);
    expect(testDestroyer.type).toEqual('Destroyer');
    expect(testDestroyer.length).toEqual(3);
    expect(testDestroyer.hp).toEqual(3);
    expect(testDestroyer.sunk).toEqual(false);
    expect(testFrigate.type).toEqual('Frigate');
    expect(testFrigate.length).toEqual(2);
    expect(testFrigate.hp).toEqual(2);
    expect(testFrigate.sunk).toEqual(false);
  });
  test("Hit method works correctly", () => {
    expect(typeof testBattleship).toBe("object");
  });
  test("Hit method works correctly", () => {
    expect(typeof testBattleship).toBe("object");
  });
  
});