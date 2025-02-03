import { expect, test } from "vitest";
import { getHandRanking } from "@/lib/poker";
import { HAND_RANKING } from "@/types/hand-ranking";
import { sortCardByRank } from "@/lib/poker.helper";
import { RANK, SUIT } from "@/types/pocker-card";

test("getHandRanking return correct results from given card hands", () => {
  expect(getHandRanking([])).toEqual({
    ranking: HAND_RANKING.HIGH_CARD,
    value: 0,
  });
});

test("a should be placed on either before two and after king", () => {
  const input = [
    { rank: RANK.FIVE, suit: SUIT.HEART },
    { rank: RANK.ACE, suit: SUIT.HEART },
    { rank: RANK.TWO, suit: SUIT.HEART },
    { rank: RANK.FOUR, suit: SUIT.HEART },
    { rank: RANK.THREE, suit: SUIT.HEART },
    { rank: RANK.KING, suit: SUIT.HEART },
    { rank: RANK.QUEEN, suit: SUIT.HEART },
    { rank: RANK.JACK, suit: SUIT.HEART },
    { rank: RANK.TEN, suit: SUIT.HEART },
    { rank: RANK.NINE, suit: SUIT.HEART },
    { rank: RANK.EIGHT, suit: SUIT.HEART },
    { rank: RANK.SEVEN, suit: SUIT.HEART },
    { rank: RANK.SIX, suit: SUIT.HEART },
  ];
  const aceFirstExpect = [
    { rank: RANK.TWO, suit: SUIT.HEART },
    { rank: RANK.THREE, suit: SUIT.HEART },
    { rank: RANK.FOUR, suit: SUIT.HEART },
    { rank: RANK.FIVE, suit: SUIT.HEART },
    { rank: RANK.SIX, suit: SUIT.HEART },
    { rank: RANK.SEVEN, suit: SUIT.HEART },
    { rank: RANK.EIGHT, suit: SUIT.HEART },
    { rank: RANK.NINE, suit: SUIT.HEART },
    { rank: RANK.TEN, suit: SUIT.HEART },
    { rank: RANK.JACK, suit: SUIT.HEART },
    { rank: RANK.QUEEN, suit: SUIT.HEART },
    { rank: RANK.KING, suit: SUIT.HEART },
    { rank: RANK.ACE, suit: SUIT.HEART },
  ];

  const aceLastExpect = [
    { rank: RANK.ACE, suit: SUIT.HEART },
    { rank: RANK.TWO, suit: SUIT.HEART },
    { rank: RANK.THREE, suit: SUIT.HEART },
    { rank: RANK.FOUR, suit: SUIT.HEART },
    { rank: RANK.FIVE, suit: SUIT.HEART },
    { rank: RANK.SIX, suit: SUIT.HEART },
    { rank: RANK.SEVEN, suit: SUIT.HEART },
    { rank: RANK.EIGHT, suit: SUIT.HEART },
    { rank: RANK.NINE, suit: SUIT.HEART },
    { rank: RANK.TEN, suit: SUIT.HEART },
    { rank: RANK.JACK, suit: SUIT.HEART },
    { rank: RANK.QUEEN, suit: SUIT.HEART },
    { rank: RANK.KING, suit: SUIT.HEART },
  ];

  const result = sortCardByRank(input);
  expect(result).toContainEqual(aceFirstExpect);
  expect(result).toContainEqual(aceLastExpect);
});
