export enum SUIT {
  CLUB = "CLUB",
  DIAMOND = "DIAMOND",
  HEART = "HEART",
  SPADE = "SPADE",
}

export enum RANK {
  ACE = "ACE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
  SIX = "SIX",
  SEVEN = "SEVEN",
  EIGHT = "EIGHT",
  NINE = "NINE",
  TEN = "TEN",
  JACK = "JACK",
  QUEEN = "QUEEN",
  KING = "KING",
}

export type Card = {
  suit: SUIT;
  rank: RANK;
};
