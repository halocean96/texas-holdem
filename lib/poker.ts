import { EstimationOfHandRanking, HAND_RANKING } from "@/types/hand-ranking";
import { Card } from "@/types/pocker-card";

export const getHandRanking = (hand: Card[]): EstimationOfHandRanking => {
  return {
    ranking: HAND_RANKING.HIGH_CARD,
    value: 0,
  };
};
