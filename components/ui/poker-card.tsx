"use client";

import { Card, RANK, SUIT } from "@/types/pocker-card";
import Image, { StaticImageData } from "next/image";
import BackFace from "@/public/Suit=Other, Number=Back Red.png";
import ClubsTwo from "@/public/Suit=Clubs, Number=2.png";
import ClubsThree from "@/public/Suit=Clubs, Number=3.png";
import ClubsFour from "@/public/Suit=Clubs, Number=4.png";
import ClubsFive from "@/public/Suit=Clubs, Number=5.png";
import ClubsSix from "@/public/Suit=Clubs, Number=6.png";
import ClubsSeven from "@/public/Suit=Clubs, Number=7.png";
import ClubsEight from "@/public/Suit=Clubs, Number=8.png";
import ClubsNine from "@/public/Suit=Clubs, Number=9.png";
import ClubsTen from "@/public/Suit=Clubs, Number=10.png";
import ClubsJack from "@/public/Suit=Clubs, Number=Jack.png";
import ClubsQueen from "@/public/Suit=Clubs, Number=Queen.png";
import ClubsKing from "@/public/Suit=Clubs, Number=King.png";
import ClubsAce from "@/public/Suit=Clubs, Number=Ace.png";
import DiamondsTwo from "@/public/Suit=Diamonds, Number=2.png";
import DiamondsThree from "@/public/Suit=Diamonds, Number=3.png";
import DiamondsFour from "@/public/Suit=Diamonds, Number=4.png";
import DiamondsFive from "@/public/Suit=Diamonds, Number=5.png";
import DiamondsSix from "@/public/Suit=Diamonds, Number=6.png";
import DiamondsSeven from "@/public/Suit=Diamonds, Number=7.png";
import DiamondsEight from "@/public/Suit=Diamonds, Number=8.png";
import DiamondsNine from "@/public/Suit=Diamonds, Number=9.png";
import DiamondsTen from "@/public/Suit=Diamonds, Number=10.png";
import DiamondsJack from "@/public/Suit=Diamonds, Number=Jack.png";
import DiamondsQueen from "@/public/Suit=Diamonds, Number=Queen.png";
import DiamondsKing from "@/public/Suit=Diamonds, Number=King.png";
import DiamondsAce from "@/public/Suit=Diamonds, Number=Ace.png";
import SpadesTwo from "@/public/Suit=Spades, Number=2.png";
import SpadesThree from "@/public/Suit=Spades, Number=3.png";
import SpadesFour from "@/public/Suit=Spades, Number=4.png";
import SpadesFive from "@/public/Suit=Spades, Number=5.png";
import SpadesSix from "@/public/Suit=Spades, Number=6.png";
import SpadesSeven from "@/public/Suit=Spades, Number=7.png";
import SpadesEight from "@/public/Suit=Spades, Number=8.png";
import SpadesNine from "@/public/Suit=Spades, Number=9.png";
import SpadesTen from "@/public/Suit=Spades, Number=10.png";
import SpadesJack from "@/public/Suit=Spades, Number=Jack.png";
import SpadesQueen from "@/public/Suit=Spades, Number=Queen.png";
import SpadesKing from "@/public/Suit=Spades, Number=King.png";
import SpadesAce from "@/public/Suit=Spades, Number=Ace.png";
import HeartsTwo from "@/public/Suit=Hearts, Number=2.png";
import HeartsThree from "@/public/Suit=Hearts, Number=3.png";
import HeartsFour from "@/public/Suit=Hearts, Number=4.png";
import HeartsFive from "@/public/Suit=Hearts, Number=5.png";
import HeartsSix from "@/public/Suit=Hearts, Number=6.png";
import HeartsSeven from "@/public/Suit=Hearts, Number=7.png";
import HeartsEight from "@/public/Suit=Hearts, Number=8.png";
import HeartsNine from "@/public/Suit=Hearts, Number=9.png";
import HeartsTen from "@/public/Suit=Hearts, Number=10.png";
import HeartsJack from "@/public/Suit=Hearts, Number=Jack.png";
import HeartsQueen from "@/public/Suit=Hearts, Number=Queen.png";
import HeartsKing from "@/public/Suit=Hearts, Number=King.png";
import HeartsAce from "@/public/Suit=Hearts, Number=Ace.png";

const CardImageBySuitAndRank: Record<SUIT, Record<RANK, StaticImageData>> = {
  [SUIT.CLUB]: {
    [RANK.TWO]: ClubsTwo,
    [RANK.THREE]: ClubsThree,
    [RANK.FOUR]: ClubsFour,
    [RANK.FIVE]: ClubsFive,
    [RANK.SIX]: ClubsSix,
    [RANK.SEVEN]: ClubsSeven,
    [RANK.EIGHT]: ClubsEight,
    [RANK.NINE]: ClubsNine,
    [RANK.TEN]: ClubsTen,
    [RANK.JACK]: ClubsJack,
    [RANK.QUEEN]: ClubsQueen,
    [RANK.KING]: ClubsKing,
    [RANK.ACE]: ClubsAce,
  },
  [SUIT.DIAMOND]: {
    [RANK.TWO]: DiamondsTwo,
    [RANK.THREE]: DiamondsThree,
    [RANK.FOUR]: DiamondsFour,
    [RANK.FIVE]: DiamondsFive,
    [RANK.SIX]: DiamondsSix,
    [RANK.SEVEN]: DiamondsSeven,
    [RANK.EIGHT]: DiamondsEight,
    [RANK.NINE]: DiamondsNine,
    [RANK.TEN]: DiamondsTen,
    [RANK.JACK]: DiamondsJack,
    [RANK.QUEEN]: DiamondsQueen,
    [RANK.KING]: DiamondsKing,
    [RANK.ACE]: DiamondsAce,
  },
  [SUIT.SPADE]: {
    [RANK.TWO]: SpadesTwo,
    [RANK.THREE]: SpadesThree,
    [RANK.FOUR]: SpadesFour,
    [RANK.FIVE]: SpadesFive,
    [RANK.SIX]: SpadesSix,
    [RANK.SEVEN]: SpadesSeven,
    [RANK.EIGHT]: SpadesEight,
    [RANK.NINE]: SpadesNine,
    [RANK.TEN]: SpadesTen,
    [RANK.JACK]: SpadesJack,
    [RANK.QUEEN]: SpadesQueen,
    [RANK.KING]: SpadesKing,
    [RANK.ACE]: SpadesAce,
  },
  [SUIT.HEART]: {
    [RANK.TWO]: HeartsTwo,
    [RANK.THREE]: HeartsThree,
    [RANK.FOUR]: HeartsFour,
    [RANK.FIVE]: HeartsFive,
    [RANK.SIX]: HeartsSix,
    [RANK.SEVEN]: HeartsSeven,
    [RANK.EIGHT]: HeartsEight,
    [RANK.NINE]: HeartsNine,
    [RANK.TEN]: HeartsTen,
    [RANK.JACK]: HeartsJack,
    [RANK.QUEEN]: HeartsQueen,
    [RANK.KING]: HeartsKing,
    [RANK.ACE]: HeartsAce,
  },
};

type Props = Card & { flip?: boolean };

export const PokerCard = ({ suit, rank, flip = false }: Props) => {
  const CardImage = CardImageBySuitAndRank[suit][rank];
  return (
    <Image
      className="aspect-[4/6] w-[150px]"
      alt="back face of poker card"
      src={flip ? BackFace.src : CardImage.src}
      width={flip ? BackFace.width : CardImage.width}
      height={flip ? BackFace.height : CardImage.height}
    />
  );
};
