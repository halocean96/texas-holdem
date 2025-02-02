import { expect, test } from "vitest";
import { getHandRanking } from "@/lib/poker";
import { HAND_RANKING } from "@/types/hand-ranking";

test("getHandRanking return correct results from given card hands", () => {
  expect(getHandRanking([])).toEqual({
    ranking: HAND_RANKING.HIGH_CARD,
    value: 0,
  });
});
