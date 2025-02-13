import { useEffect, useState } from 'react';
import { MatchScoreProps } from '../match/Match';

export type PlayerProps = {
  ranking: number;
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

  if (!matchScore) {
    return;
  }

  useEffect(() => {
    setPlayerTableData((prev) => {
      let newData = { ...prev };

      matchScore.map((match) => {
        const winnerPlayer1 =
          match.theWinner === prev.name && match.player1Name === prev.name;
        const winnerPlayer2 =
          match.theWinner === prev.name && match.player2Name === prev.name;
        const notWinnerPlayer1 =
          match.theWinner !== prev.name && match.player1Name === prev.name;
        const notWinnerPlayer2 =
          match.theWinner !== prev.name && match.player2Name === prev.name;

        if (winnerPlayer1) {
          newData.name;
          newData.pj += 1;
          newData.pg += 1;
          newData.pp;
          newData.jf += match.player1Score;
          newData.jc += match.player2Score;
          newData.dif += match.player1Score - match.player2Score;
        }

        if (winnerPlayer2) {
          newData.name;
          newData.pj += 1;
          newData.pg += 1;
          newData.pp;
          newData.jf += match.player2Score;
          newData.jc += match.player1Score;
          newData.dif += match.player2Score - match.player1Score;
        }

        if (notWinnerPlayer1) {
          newData.name;
          newData.pj += 1;
          newData.pg;
          newData.pp += 1;
          newData.jf += match.player1Score;
          newData.jc += match.player2Score;
          newData.dif += match.player1Score - match.player2Score;
        }

        if (notWinnerPlayer2) {
          newData.name;
          newData.pj += 1;
          newData.pg;
          newData.pp += 1;
          newData.jf += match.player2Score;
          newData.jc += match.player1Score;
          newData.dif += match.player2Score - match.player1Score;
        }

        if (
          match.player1Name !== prev.name &&
          match.player2Name !== prev.name
        ) {
          newData.name;
          newData.pj;
          newData.pg;
          newData.pp;
          newData.jf;
          newData.jc;
          newData.dif;
        }
      });

      return newData;
    });
  }, [matchScore]);

  return (
    <>
      <tr>
        <td></td>
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
