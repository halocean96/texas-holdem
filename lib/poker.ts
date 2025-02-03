import { EstimationOfHandRanking, HAND_RANKING } from "@/types/hand-ranking";
import { RANK, Card } from "@/types/pocker-card";

const checkHighCard = (hand: Card[]) => {
  const sortedHand = hand.sort((a, b) => b.rank - a.rank);
  return {
    ranking: HAND_RANKING.HIGH_CARD,
    value: sortedHand[0].rank,
  };
};

const checkPair = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const hasPair = Object.values(rankCounts).some((count) => count === 2);
  return hasPair ? { ranking: HAND_RANKING.ONE_PAIR, value: 0 } : null;
};

const checkTwoPair = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const hasTwoPairs =
    Object.values(rankCounts).filter((count) => count === 2).length >= 2;
  return hasTwoPairs ? { ranking: HAND_RANKING.TWO_PAIR, value: 0 } : null;
};

const checkThreeOfAKind = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const hasThreeOfAKind = Object.values(rankCounts).some(
    (count) => count === 3
  );
  return hasThreeOfAKind
    ? { ranking: HAND_RANKING.THREE_OF_A_KIND, value: 0 }
    : null;
};

const checkStraight = (hand: Card[]) => {
  const sortedHand = hand.sort((a, b) => a.rank - b.rank);
  const isConsecutive = sortedHand.every((card, index, array) => {
    if (index === 0) {
      return true;
    }
    return card.rank - array[index - 1].rank === 1;
  });
  return isConsecutive ? { ranking: HAND_RANKING.STRAIGHT, value: 0 } : null;
};

const checkFlush = (hand: Card[]) => {
  const suits = hand.map((card) => card.suit);
  const isSameSuit = suits.every((suit) => suit === suits[0]);
  return isSameSuit ? { ranking: HAND_RANKING.FLUSH, value: 0 } : null;
};

const checkFullHouse = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const hasThreeOfAKind = Object.values(rankCounts).some(
    (count) => count === 3
  );
  const hasPair = Object.values(rankCounts).some((count) => count === 2);
  return hasThreeOfAKind && hasPair
    ? { ranking: HAND_RANKING.FULL_HOUSE, value: 0 }
    : null;
};

const checkFourOfAKind = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const hasFourOfAKind = Object.values(rankCounts).some((count) => count === 4);
  return hasFourOfAKind
    ? { ranking: HAND_RANKING.FOUR_OF_A_KIND, value: 0 }
    : null;
};

const checkStraightFlush = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const isConsecutive = Object.keys(rankCounts).every((rank, index, array) => {
    if (index === 0) {
      return true;
    }
    return parseInt(rank) - parseInt(array[index - 1]) === 1;
  });
  const isSameSuit = hand.every((card) => card.suit === hand[0].suit);
  return isConsecutive && isSameSuit
    ? { ranking: HAND_RANKING.STRAIGHT_FLUSH, value: 0 }
    : null;
};

const checkRoyalFlush = (hand: Card[]) => {
  const rankCounts = hand.reduce<Record<RANK, number>>((counts, card) => {
    counts[card.rank] = (counts[card.rank] || 0) + 1;
    return counts;
  }, {});
  const isSameSuit = hand.every((card) => card.suit === hand[0].suit);
  const isConsecutive = Object.keys(rankCounts).every(
    (rank, index, array) => parseInt(rank) === 10 + index
  );
  return isConsecutive && isSameSuit
    ? { ranking: HAND_RANKING.ROYAL_FLUSH, value: 0 }
    : null;
};

export const getHandRanking = (hand: Card[]): EstimationOfHandRanking => {
  return {
    ranking: HAND_RANKING.HIGH_CARD,
    value: 0,
  };
};
