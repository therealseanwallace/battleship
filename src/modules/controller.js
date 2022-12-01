import { playerFactory } from "@/modules/playerFactory";

export const controller = (() => {
  const { human, cpu } = playerFactory();

  return { human, cpu };
})();
