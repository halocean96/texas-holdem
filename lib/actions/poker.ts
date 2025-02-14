// TODO: library doesn't support typescript. add declare file
// @ts-expect-error no type support
import { Hand } from "pokersolver";
import { Card, RANK, SUIT } from "@/types/pocker-card";
import { HAND_RANKING } from "@/types/hand-ranking";

const RankMap: Record<RANK, string> = {
  [RANK.ACE]: "A",
  [RANK.TWO]: "2",
  [RANK.THREE]: "3",
  [RANK.FOUR]: "4",
  [RANK.FIVE]: "5",
  [RANK.SIX]: "6",
  [RANK.SEVEN]: "7",
  [RANK.EIGHT]: "8",
  [RANK.NINE]: "9",
  [RANK.TEN]: "T",
  [RANK.JACK]: "J",
  [RANK.QUEEN]: "Q",
  [RANK.KING]: "K",
};

const SuitMap: Record<SUIT, string> = {
  [SUIT.HEART]: "h",
  [SUIT.SPADE]: "s",
  [SUIT.CLUB]: "c",
  [SUIT.DIAMOND]: "d",
};

const HandRankingMap: Record<string, HAND_RANKING> = {};

const convertCardIntoCode = (card: Card): string => {
  const rank = RankMap[card.rank];
  const suit = SuitMap[card.suit];
  return rank + suit;
};

export const evalHand = (hand: Card[]) => {
  return Hand.solve(hand.map(convertCardIntoCode));
};

export const getWinner = (handList: Card[][]) => {
  return Hand.winners(handList.map(evalHand));
};
