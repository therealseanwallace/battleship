import { controller } from "@/modules/controller";

describe("Controller works correctly", () => {
  // Should return a player object with the appropriate methods and
  // attributes
  test("Controller is present", () => {
    expect(controller);
  });
  test("cpu returns a cpuAttack function", () => {
    expect(controller.cpu.attack);
  });
  test("cpuAttack method works", () => {
    // cpuAttack should generate a random x/y coord, then call the attack
    // method on the human player object
    expect(controller.cpu.attack()).toStrictEqual(true);
  });
  test("humanAttack method works", () => {
    // cpuAttack should generate a random x/y coord, then call the attack
    // method on the human player object
    expect(controller.human.attack(0, 0)).toStrictEqual(true);
  });
});
