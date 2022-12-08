import PubSub from "../modules/PubSub";

describe("ShipFactory", () => {
  const testSub = {
    testVar: "",
    test: (payload) => {
      testSub.testVar = payload
    },
  };
  const pubSub = new PubSub();
  pubSub.sub("test", testSub.test);
  pubSub.pub("test", "test");

  test("Subbing with a non-function returns an error", () => {
    expect(pubSub.sub("test", 500)).toStrictEqual(
      "number is not a valid argument for subscribers"
    );
  });
  test("Unsubbing with a non-function returns an error", () => {
    expect(pubSub.unsub("test", 500)).toStrictEqual(
      "number is not a valid argument for unsubscribing"
    );
  });
  test("Subbing a valid function works", () => {
    expect(testSub.testVar).toStrictEqual("test");
  });

  pubSub.unsub("test", testSub.test);

  test("Unsubbing works", () => {
    expect(pubSub.returnSubscribers("test")).toStrictEqual([]);
  });
});
