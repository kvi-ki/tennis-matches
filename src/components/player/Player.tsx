import { useEffect, useState } from 'react';
import { MatchScoreProps } from '../match/Match';

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
  matchScore: MatchScoreProps;
}) {
  const [playerSummary, setPlayerSummery] = useState<PlayerProps>(playerData);

  useEffect(() => {
    if (
      matchScore.theWinner === matchScore.player1Name &&
      matchScore.player1Name === playerData.name
    ) {
      return setPlayerSummery({
        name: playerData.name,
        pj: playerData.pj + 1,
        pg: playerData.pg + 1,
        pp: playerData.pp,
        jf: playerData.jf + matchScore.player1Score,
        jc: playerData.jc + matchScore.player2Score,
        dif:
          playerData.dif + (matchScore.player1Score - matchScore.player2Score)
      });
    }

    if (
      matchScore.theWinner === matchScore.player2Name &&
      matchScore.player2Name === playerData.name
    ) {
      return setPlayerSummery({
        name: playerData.name,
        pj: playerData.pj + 1,
        pg: playerData.pg,
        pp: playerData.pp + 1,
        jf: playerData.jf + matchScore.player2Score,
        jc: playerData.jc + matchScore.player1Score,
        dif:
          playerData.dif + (matchScore.player1Score - matchScore.player2Score)
      });
    }

    if (!matchScore) {
      return setPlayerSummery({
        name: playerData.name,
        pj: playerData.pj,
        pg: playerData.pg,
        pp: playerData.pp,
        jf: playerData.jf,
        jc: playerData.jc,
        dif: playerData.dif
      });
    }
  }, [playerData, matchScore]);

  return (
    <>
      <tr>
        <td className="font-semibold text-left pl-2">{playerSummary.name}</td>
        <td>{playerSummary.pj}</td>
        <td>{playerSummary.pg}</td>
        <td>{playerSummary.pp}</td>
        <td>{playerSummary.jf}</td>
        <td>{playerSummary.jc}</td>
        <td>{playerSummary.dif}</td>
      </tr>
    </>
  );
}
