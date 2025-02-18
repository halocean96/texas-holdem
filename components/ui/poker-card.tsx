"use client";

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

const CardImageBySuitAndRank: Record<
  string,
  Record<string, StaticImageData>
> = {
  c: {
    2: ClubsTwo,
    3: ClubsThree,
    4: ClubsFour,
    5: ClubsFive,
    6: ClubsSix,
    7: ClubsSeven,
    8: ClubsEight,
    9: ClubsNine,
    T: ClubsTen,
    J: ClubsJack,
    Q: ClubsQueen,
    K: ClubsKing,
    A: ClubsAce,
  },
  d: {
    2: DiamondsTwo,
    3: DiamondsThree,
    4: DiamondsFour,
    5: DiamondsFive,
    6: DiamondsSix,
    7: DiamondsSeven,
    8: DiamondsEight,
    9: DiamondsNine,
    T: DiamondsTen,
    J: DiamondsJack,
    Q: DiamondsQueen,
    K: DiamondsKing,
    A: DiamondsAce,
  },
  s: {
    2: SpadesTwo,
    3: SpadesThree,
    4: SpadesFour,
    5: SpadesFive,
    6: SpadesSix,
    7: SpadesSeven,
    8: SpadesEight,
    9: SpadesNine,
    T: SpadesTen,
    J: SpadesJack,
    Q: SpadesQueen,
    K: SpadesKing,
    A: SpadesAce,
  },
  h: {
    2: HeartsTwo,
    3: HeartsThree,
    4: HeartsFour,
    5: HeartsFive,
    6: HeartsSix,
    7: HeartsSeven,
    8: HeartsEight,
    9: HeartsNine,
    T: HeartsTen,
    J: HeartsJack,
    Q: HeartsQueen,
    K: HeartsKing,
    A: HeartsAce,
  },
};

type Props = { card: string; flip?: boolean };

export const PokerCard = ({ card, flip = false }: Props) => {
  const [rank, suit] = card.split("");
  const CardImage = CardImageBySuitAndRank[suit]?.[rank];
  if (!CardImage) {
    return null;
  }
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
