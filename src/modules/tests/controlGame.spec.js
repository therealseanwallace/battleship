import { controller } from "@/modules/controlGame";

// This module will import the game boards, players, and ships from
// the corresponding factories

describe("The game controller works", () => {
  // the controller will pull in two game boards and assign them to the
  // corresponding players. to place a ship, we will need to call a function
  // in the controller to call the method on the appropriate board and
  // return the return

  test("Controller is successfully imported", () => {
    expect(controller);
  });

  test("Placing ships via the player objects works", () => {
    console.log("controller.playerOne is", controller.playerOne);
    console.log(
      "controller.playerOne.placeShip is",
      controller.playerOne.placeShip
    );
    expect(controller.playerOne.placeShip(0, 0, 0, 6, 1)).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
  });

  // a method that starts the game flow by getting a random number

  // a method that accepts attacks from a player and returns feedback
  // on the attack
});
