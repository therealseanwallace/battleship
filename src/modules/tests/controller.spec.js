import { controller } from "../controller";

describe("Controller", () => {
  console.log("controller.players =", controller.players)
  test("Current player returns a number", () => {
    expect(typeof controller.currentPlayer).toStrictEqual('number');
  });
  test("Controller returns player objects", () => { 
    expect(typeof controller.players.human).toStrictEqual('object');
    expect(typeof controller.players.cpu).toStrictEqual('object');
  });
  test("pubSub methods are available via controller", () => { 
    expect(typeof controller.pubSub.sub).toStrictEqual('function');
  });
  test("Interface methods are available via controller", () => { 
    expect(typeof controller.iface.buildShips).toStrictEqual('function');
  });
  controller.addTestShips();
  test("addTestShips works", () => {
    expect(controller.players.human.board.gameBoard.board[0][0].occupant).toStrictEqual(0);
  });
});
