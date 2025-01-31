"use client";

import { AnimatePresence, motion } from "motion/react";
import { SUIT, RANK } from "@/types/pocker-card";
import { FaHeart } from "react-icons/fa";
import { GiClubs } from "react-icons/gi";
import { FaDiamond } from "react-icons/fa6";
import { BsSuitSpadeFill } from "react-icons/bs";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BackFace from "@/public/back-face.png";

const ICON_BY_SUIT: Record<SUIT, ReactNode> = {
  [SUIT.CLUB]: <GiClubs />,
  [SUIT.DIAMOND]: <FaDiamond />,
  [SUIT.HEART]: <FaHeart />,
  [SUIT.SPADE]: <BsSuitSpadeFill />,
};

const COLOR_BY_SUIT: Record<SUIT, string> = {
  [SUIT.CLUB]: "text-black",
  [SUIT.DIAMOND]: "text-red-500",
  [SUIT.HEART]: "text-red-500",
  [SUIT.SPADE]: "text-black",
};

const TEXT_BY_RANK: Record<RANK, string> = {
  [RANK.ACE]: "A",
  [RANK.TWO]: "2",
  [RANK.THREE]: "3",
  [RANK.FOUR]: "4",
  [RANK.FIVE]: "5",
  [RANK.SIX]: "6",
  [RANK.SEVEN]: "7",
  [RANK.EIGHT]: "8",
  [RANK.NINE]: "9",
  [RANK.TEN]: "10",
  [RANK.JACK]: "J",
  [RANK.QUEEN]: "Q",
  [RANK.KING]: "K",
};

type Props = {
  suit: SUIT;
  rank: RANK;
  flip?: boolean;
};

export const PokerCard = ({ suit, rank, flip = false }: Props) => {
  if (flip)
    return (
      <Image
        className="aspect-[4/6] w-[150px]"
        alt="back face of poker card"
        src={BackFace.src}
        width={BackFace.width}
        height={BackFace.height}
      />
    );
  return (
    <motion.div className="aspect-[4/6] box-border w-[150px] shadow-md relative p-2 rounded-md flex flex-col justify-center items-center gap-1 border border-gray-200">
      <div className={cn(COLOR_BY_SUIT[suit], "text-4xl top-2 left-2")}>
        {TEXT_BY_RANK[rank]}
      </div>
      <div className={cn(COLOR_BY_SUIT[suit], "text-6xl")}>
        {ICON_BY_SUIT[suit]}
      </div>
    </motion.div>
  );
};
