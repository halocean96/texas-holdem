import { RANK, SUIT } from "@/types/pocker-card";

export const cardListForHighCard = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.EIGHT, suit: SUIT.DIAMOND },
  { rank: RANK.SEVEN, suit: SUIT.CLUB },
  { rank: RANK.SIX, suit: SUIT.SPADE },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.DIAMOND },
  { rank: RANK.THREE, suit: SUIT.CLUB },
];

export const hightCardList = [{ rank: RANK.ACE, suit: SUIT.HEART }];

export const cardListForPair = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.SEVEN, suit: SUIT.CLUB },
  { rank: RANK.SIX, suit: SUIT.SPADE },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.THREE, suit: SUIT.DIAMOND },
  { rank: RANK.THREE, suit: SUIT.CLUB },
];

export const pairList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
];

export const cardListForTwoPair = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.KING, suit: SUIT.CLUB },
  { rank: RANK.KING, suit: SUIT.SPADE },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.FIVE, suit: SUIT.DIAMOND },
  { rank: RANK.THREE, suit: SUIT.CLUB },
];

export const twoPairList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.KING, suit: SUIT.CLUB },
  { rank: RANK.KING, suit: SUIT.SPADE },
];

export const cardListForThreeOfAKind = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
  { rank: RANK.SEVEN, suit: SUIT.SPADE },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.DIAMOND },
  { rank: RANK.THREE, suit: SUIT.CLUB },
];

export const threeOfAKindList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
];

export const cardListForStraight = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.TWO, suit: SUIT.DIAMOND },
  { rank: RANK.KING, suit: SUIT.CLUB },
  { rank: RANK.QUEEN, suit: SUIT.SPADE },
  { rank: RANK.JACK, suit: SUIT.HEART },
  { rank: RANK.TEN, suit: SUIT.DIAMOND },
  { rank: RANK.SEVEN, suit: SUIT.CLUB },
];

export const straightList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.KING, suit: SUIT.CLUB },
  { rank: RANK.QUEEN, suit: SUIT.SPADE },
  { rank: RANK.JACK, suit: SUIT.HEART },
  { rank: RANK.TEN, suit: SUIT.DIAMOND },
];

export const cardListForFlush = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.TWO, suit: SUIT.HEART },
  { rank: RANK.THREE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.HEART },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.SIX, suit: SUIT.HEART },
  { rank: RANK.SEVEN, suit: SUIT.HEART },
];

export const flushList = [
  { rank: RANK.THREE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.HEART },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.SIX, suit: SUIT.HEART },
  { rank: RANK.SEVEN, suit: SUIT.HEART },
];

export const cardListForFullHouse = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
  { rank: RANK.KING, suit: SUIT.HEART },
  { rank: RANK.KING, suit: SUIT.DIAMOND },
  { rank: RANK.KING, suit: SUIT.CLUB },
  { rank: RANK.QUEEN, suit: SUIT.HEART },
];

export const fullHouseList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
  { rank: RANK.KING, suit: SUIT.HEART },
  { rank: RANK.KING, suit: SUIT.DIAMOND },
];

export const cardListForFourOfAKind = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
  { rank: RANK.ACE, suit: SUIT.SPADE },
  { rank: RANK.KING, suit: SUIT.HEART },
  { rank: RANK.QUEEN, suit: SUIT.DIAMOND },
  { rank: RANK.JACK, suit: SUIT.CLUB },
];

export const fourOfAKindList = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.ACE, suit: SUIT.DIAMOND },
  { rank: RANK.ACE, suit: SUIT.CLUB },
  { rank: RANK.ACE, suit: SUIT.SPADE },
];

export const cardListForStraightFlush = [
  { rank: RANK.ACE, suit: SUIT.HEART },
  { rank: RANK.TWO, suit: SUIT.HEART },
  { rank: RANK.THREE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.HEART },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.SIX, suit: SUIT.HEART },
  { rank: RANK.SEVEN, suit: SUIT.HEART },
];

export const straightFlushList = [
  { rank: RANK.THREE, suit: SUIT.HEART },
  { rank: RANK.FOUR, suit: SUIT.HEART },
  { rank: RANK.FIVE, suit: SUIT.HEART },
  { rank: RANK.SIX, suit: SUIT.HEART },
  { rank: RANK.SEVEN, suit: SUIT.HEART },
];
