export enum HAND_RANKING {
  ROYAL_FLUSH,
  STRAIGHT_FLUSH,
  FOUR_OF_A_KIND,
  FULL_HOUSE,
  FLUSH,
  STRAIGHT,
  THREE_OF_A_KIND,
  TWO_PAIR,
  ONE_PAIR,
  HIGH_CARD,
}

export type EstimationOfHandRanking = {
  ranking: HAND_RANKING;
  value: number;
};
