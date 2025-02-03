import { RANK } from "@/types/pocker-card";

export const RankOrderList: RANK[] = [
  RANK.ACE,
  RANK.TWO,
  RANK.THREE,
  RANK.FOUR,
  RANK.FIVE,
  RANK.SIX,
  RANK.SEVEN,
  RANK.EIGHT,
  RANK.NINE,
  RANK.TEN,
  RANK.JACK,
  RANK.QUEEN,
  RANK.KING,
  RANK.ACE,
];

export const AceFirstOrderList = RankOrderList.slice(
  0,
  RankOrderList.length - 1
);
export const AceLastOrderList = RankOrderList.slice(1, RankOrderList.length);
