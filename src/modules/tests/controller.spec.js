import { controller } from "@/modules/controller";

describe("Controller works correctly", () => {
  // Should return a player object with the appropriate methods and
  // attributes
  test("Controller is present", () => {
    expect(controller);
  });
  test("Placing a ship via the controller works", () => {
    expect(controller.placeShip(0, 0, 0, 6, 1)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });
  test("Hitting the test battleship returns correct result", () => {
    expect(controller.attack(0, 0, 1)).toStrictEqual([true, 5, false]);
  });
});
