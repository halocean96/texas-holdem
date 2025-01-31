import type { Meta, StoryObj } from "@storybook/react";

import { PokerCard } from "@/components/ui/poker-card";
import { RANK, SUIT } from "@/types/pocker-card";

const meta: Meta<typeof PokerCard> = {
  component: PokerCard,
};

export default meta;
type Story = StoryObj<typeof PokerCard>;

export const Primary: Story = {
  render: () => {
    const suitList = Object.values(SUIT).filter((v) => typeof v === "number");
    const rankList = Object.values(RANK).filter((v) => typeof v === "number");

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
  },
};
