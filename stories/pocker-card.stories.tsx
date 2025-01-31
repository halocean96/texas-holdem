import type { Meta, StoryObj } from "@storybook/react";

import { PockerCard } from "@/components/ui/pocker-card";
import { RANK, SUIT } from "@/types/pocker-card";

const meta: Meta<typeof PockerCard> = {
  component: PockerCard,
};

export default meta;
type Story = StoryObj<typeof PockerCard>;

export const Primary: Story = {
  render: () => {
    const suitList = Object.values(SUIT).filter((v) => typeof v === "number");
    const rankList = Object.values(RANK).filter((v) => typeof v === "number");

    return (
      <div className="flex gap-2 flex-wrap">
        {suitList.map((suit) =>
          rankList.map((rank) => (
            <PockerCard key={`${suit}-${rank}`} suit={suit} rank={rank} />
          ))
        )}
      </div>
    );
  },
};
