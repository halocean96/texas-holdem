import { RANK, Card } from "@/types/pocker-card";
import { sortCardByRank } from "@/lib/poker.helper";
import { max, isEmpty, last } from "radash";
import { AceLastOrderList } from "@/constants/poker";

export const getHighCard = (hand: Card[]): Card[] => {
  const [_, aceLastOrder] = sortCardByRank(hand);
  return [last(aceLastOrder) as Card];
};

export const getPair = (hand: Card[]): Card[] => {
  const rankCountMap = new Map<RANK, number>();
  hand.forEach((card) => {
    const count = rankCountMap.get(card.rank) ?? 0;
    rankCountMap.set(card.rank, count + 1);
  });
  const pairCardList = Array.from(rankCountMap.entries()).filter(
    ([_rank, count]) => count > 1
  );
  if (isEmpty(pairCardList)) return [];

  const pairCardRank = max(pairCardList, ([rank]) =>
    AceLastOrderList.indexOf(rank)
  );
  if (pairCardRank === null) return [];
  return hand.filter((card) => card.rank === pairCardRank[0]);
};

export const getTwoPair = (hand: Card[]): Card[] => {
  const rankCountMap = new Map<RANK, number>();
  hand.forEach((card) => {
    const count = rankCountMap.get(card.rank) ?? 0;
    rankCountMap.set(card.rank, count + 1);
  });
  const pairCardList = Array.from(rankCountMap.entries()).filter(
    ([_rank, count]) => count > 1
  );
  if (pairCardList.length < 2) return [];

  const pairCardRank = [...pairCardList]
    .sort(
      ([rankA], [rankB]) =>
        AceLastOrderList.indexOf(rankB) - AceLastOrderList.indexOf(rankA)
    )
    .slice(0, 2);
  if (pairCardRank === null) return [];
  return hand.filter((card) =>
    pairCardRank.some(([rank]) => rank === card.rank)
  );
};

export const getThreeOfAKind = (hand: Card[]): Card[] => {
  return [];
};

export const getStraight = (hand: Card[]): Card[] => {
  return [];
};

export const getFlush = (hand: Card[]): Card[] => {
  return [];
};

export const getFullHouse = (hand: Card[]): Card[] => {
  return [];
};

export const getFourOfAKind = (hand: Card[]): Card[] => {
  return [];
};

export const getStraightFlush = (hand: Card[]): Card[] => {
  return [];
};
