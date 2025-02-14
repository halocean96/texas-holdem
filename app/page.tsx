"use client";

import { CardShowcase } from "@/components/card-showcase";
import { evalHand, getWinner } from "@/lib/actions/poker";
import { Card, RANK, SUIT } from "@/types/pocker-card";

export default function Home() {
  const onClick = async () => {
    // 여러 플레이어의 핸드 예시
    const player1Cards: Card[] = [
      { rank: RANK.ACE, suit: SUIT.SPADE },
      { rank: RANK.KING, suit: SUIT.SPADE },
      { rank: RANK.QUEEN, suit: SUIT.SPADE },
      { rank: RANK.JACK, suit: SUIT.SPADE },
      { rank: RANK.TEN, suit: SUIT.SPADE },
      { rank: RANK.THREE, suit: SUIT.CLUB },
      { rank: RANK.FIVE, suit: SUIT.HEART },
    ]; // Royal Flush

    const player2Cards: Card[] = [
      { rank: RANK.ACE, suit: SUIT.HEART },
      { rank: RANK.ACE, suit: SUIT.DIAMOND },
      { rank: RANK.ACE, suit: SUIT.CLUB },
      { rank: RANK.KING, suit: SUIT.HEART },
      { rank: RANK.KING, suit: SUIT.DIAMOND },
      { rank: RANK.TWO, suit: SUIT.CLUB },
      { rank: RANK.THREE, suit: SUIT.HEART },
    ]; // Full House (Aces full of Kings)

    const player3Cards: Card[] = [
      { rank: RANK.EIGHT, suit: SUIT.DIAMOND },
      { rank: RANK.EIGHT, suit: SUIT.HEART },
      { rank: RANK.EIGHT, suit: SUIT.SPADE },
      { rank: RANK.EIGHT, suit: SUIT.CLUB },
      { rank: RANK.KING, suit: SUIT.SPADE },
      { rank: RANK.TWO, suit: SUIT.DIAMOND },
      { rank: RANK.THREE, suit: SUIT.SPADE },
    ]; // Four of a Kind (Eights)

    const hands = [player2Cards, player3Cards, player1Cards];
    const winner = getWinner(hands);
    console.log("Winner:", winner);

    // 각 핸드의 개별 평가도 확인
    for (let i = 0; i < hands.length; i++) {
      const result = evalHand(hands[i]);
      console.log(`Player ${i + 1} hand:`, result);
    }
  };

  return (
    <main className="p-4">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Evaluate Hands
      </button>
      <CardShowcase />
    </main>
  );
}
