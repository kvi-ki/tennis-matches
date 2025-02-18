import { useEffect, useState } from 'react';
import { MatchScoreProps } from '../match/Match';
import { calculatePlayerPoints } from '@/utils/calculatePlayerPoints';

export type PlayerProps = {
  name: string;
  pj: number;
  pg: number;
  pp: number;
  jf: number;
  jc: number;
  dif: number;
};

export default function Player({
  playerData,
  matchScore,
  setRanking
}: {
  playerData: PlayerProps;
  matchScore: MatchScoreProps[];
  setRanking: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [playerTableData, setPlayerTableData] =
    useState<PlayerProps>(playerData);

  const [playerRanking, setPlayerRanking] = useState<number>(0);

  if (!matchScore) {
    return;
  }

  useEffect(() => {
    setPlayerTableData((prev) => {
      return calculatePlayerPoints(prev, matchScore);
    });
  }, [matchScore]);

  useEffect(() => {
    const winningPoints: number = playerTableData.pg * 3;
    const losingPoints: number = playerTableData.pp * 1;
    const rankingPoints: number = winningPoints + losingPoints;

    setPlayerRanking(rankingPoints);
    setRanking((prev) => {
      const updatedRankingArray = [...prev, rankingPoints];
      return updatedRankingArray;
    });
  }, [playerTableData]);

  return (
    <>
      <tr>
        <td>{playerRanking}</td>
        <td className="font-semibold text-left pl-2">{playerTableData.name}</td>
        <td>{playerTableData.pj}</td>
        <td>{playerTableData.pg}</td>
        <td>{playerTableData.pp}</td>
        <td>{playerTableData.jf}</td>
        <td>{playerTableData.jc}</td>
        <td>{playerTableData.dif}</td>
      </tr>
    </>
  );
}
