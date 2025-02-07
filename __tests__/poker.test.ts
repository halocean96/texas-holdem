import { describe, expect, test } from "vitest";
import { HAND_RANKING } from "@/types/hand-ranking";
import { RANK, SUIT } from "@/types/pocker-card";
import { sortCardByRank } from "@/lib/poker.helper";
import {
  getHighCard,
  getPair,
  getTwoPair,
  getThreeOfAKind,
  getStraight,
  getFlush,
  getFullHouse,
  getFourOfAKind,
  getStraightFlush,
} from "@/lib/poker";
import {
  hightCardList,
  cardListForHighCard,
  cardListForPair,
  pairList,
  cardListForTwoPair,
  twoPairList,
  cardListForThreeOfAKind,
  threeOfAKindList,
  cardListForStraight,
  straightList,
  cardListForFlush,
  flushList,
  cardListForFullHouse,
  fullHouseList,
  cardListForFourOfAKind,
  fourOfAKindList,
  cardListForStraightFlush,
  straightFlushList,
} from "@/__tests__/poker.mock";
import { isEmpty } from "radash";

describe("poker", () => {
  describe("getHighCard", () => {
    test("should return high card ranking", () => {
      const result = getHighCard(cardListForHighCard);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(hightCardList));
    });
  });

  describe("getPair", () => {
    test("should return pair ranking", () => {
      const result = getPair(cardListForPair);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(pairList));
    });
  });

  describe("getTwoPair", () => {
    test("should return two pair ranking", () => {
      const result = getTwoPair(cardListForTwoPair);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(twoPairList));
    });
  });

  describe("getThreeOfAKind", () => {
    test("should return three of a kind ranking", () => {
      const result = getThreeOfAKind(cardListForThreeOfAKind);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(threeOfAKindList));
    });
  });

  describe.skip("getStraight", () => {
    test("should return straight ranking", () => {
      const result = getStraight(cardListForStraight);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(straightList));
    });
  });

  describe.skip("getFlush", () => {
    test("should return flush ranking", () => {
      const result = getFlush(cardListForFlush);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(flushList));
    });
  });

  describe.skip("getFullHouse", () => {
    test("should return full house ranking", () => {
      const result = getFullHouse(cardListForFullHouse);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(fullHouseList));
    });
  });

  describe.skip("getFourOfAKind", () => {
    test("should return four of a kind ranking", () => {
      const result = getFourOfAKind(cardListForFourOfAKind);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(fourOfAKindList));
    });
  });

  describe.skip("getStraightFlush", () => {
    test("should return straight flush ranking", () => {
      const result = getStraightFlush(cardListForStraightFlush);
      expect(isEmpty(result)).toBeFalsy();
      expect(result).toEqual(expect.arrayContaining(straightFlushList));
    });
  });
});
