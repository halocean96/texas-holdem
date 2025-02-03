import { Card, RANK } from "@/types/pocker-card";
import { AceFirstOrderList, AceLastOrderList } from "@/constants/poker";

export const sortCardByRank = (hand: Card[]) => {
  const aceFirstSorted = [...hand].sort(
    (a, b) =>
      AceFirstOrderList.indexOf(a.rank) - AceFirstOrderList.indexOf(b.rank)
  );

  const aceLastSorted = [...hand].sort(
    (a, b) =>
      AceLastOrderList.indexOf(a.rank) - AceLastOrderList.indexOf(b.rank)
  );
  console.log({ aceFirstSorted, aceLastSorted });
  return [aceFirstSorted, aceLastSorted];
};
