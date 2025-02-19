import { useEffect, useState } from 'react';
import { MatchScoreProps } from '../match/Match';
import { calculatePlayerPoints } from '@/utils/calculatePlayerPoints';
import { calculateRanking } from '@/utils/calculateRanking';

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
  matchScore
}: {
  playerData: PlayerProps;
  matchScore: MatchScoreProps[];
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
    const rankingPoints: number = calculateRanking(playerTableData);
    setPlayerRanking(rankingPoints);

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
