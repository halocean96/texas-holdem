import { RANK, SUIT } from "@/types/pocker-card";
import { PokerCard } from "./ui/poker-card";

export const CardShowcase = () => {
  const suitList = Object.values(SUIT);
  const rankList = Object.values(RANK);

  return (
    <div className="flex gap-2 flex-wrap">
      <PokerCard suit={SUIT.CLUB} rank={RANK.ACE} flip />
      {suitList.map((suit) =>
        rankList.map((rank) => (
          <PokerCard key={`${suit}-${rank}`} suit={suit} rank={rank} />
        ))
      )}
    </div>
  );
};
