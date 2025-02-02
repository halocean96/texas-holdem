export enum SUIT {
  CLUB,
  DIAMOND,
  HEART,
  SPADE,
}

export enum RANK {
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
}

export type Card = {
  suit: SUIT;
  rank: RANK;
};
