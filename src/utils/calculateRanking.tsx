import { PlayerProps } from "@/components/player/Player";

export const calculateRanking = (playerTableData: PlayerProps) => {
  const winningPoints: number = playerTableData.pg * 3;
    const losingPoints: number = playerTableData.pp * 1;
    const rankingPoints: number = winningPoints + losingPoints;

    return rankingPoints;
}