import { useContext } from 'react';
import Player, { PlayerProps } from '../player/Player';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';
import { MatchScoreProps } from '../match/Match';
import { filterPlayersByPlayedMatches } from '@/utils/players';

export default function Table({ playersData }: { playersData: PlayerProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { matchesScores } = context;

  const playersDataToShow = playersData.map((playerData) => {
    const updatedMatches = filterPlayersByPlayedMatches(
      matchesScores,
      playerData
    );

    const newData = updatedMatches.reduce(
      (data: PlayerProps, match: MatchScoreProps) => {
        const winnerPlayer1 =
          match.theWinner === playerData.name &&
          match.player1Name === playerData.name;
        const winnerPlayer2 =
          match.theWinner === playerData.name &&
          match.player2Name === playerData.name;
        const notWinnerPlayer1 =
          match.theWinner !== playerData.name &&
          match.player1Name === playerData.name;
        const notWinnerPlayer2 =
          match.theWinner !== playerData.name &&
          match.player2Name === playerData.name;

        if (winnerPlayer1) {
          return {
            ...data,
            pj: (data.pj += 1),
            pg: (data.pg += 1),
            pp: data.pp,
            jf: (data.jf += match.player1Score),
            jc: (data.jc += match.player2Score),
            dif: (data.dif += match.player1Score - match.player2Score)
          };
        }

        if (winnerPlayer2) {
          return {
            ...data,
            pj: (data.pj += 1),
            pg: (data.pg += 1),
            pp: data.pp,
            jf: (data.jf += match.player2Score),
            jc: (data.jc += match.player1Score),
            dif: (data.dif += match.player2Score - match.player1Score)
          };
        }

        if (notWinnerPlayer1) {
          return {
            ...data,
            pj: (data.pj += 1),
            pg: data.pg,
            pp: (data.pp += 1),
            jf: (data.jf += match.player1Score),
            jc: (data.jc += match.player2Score),
            dif: (data.dif += match.player1Score - match.player2Score)
          };
        }

        if (notWinnerPlayer2) {
          return {
            ...data,
            pj: (data.pj += 1),
            pg: data.pg,
            pp: (data.pp += 1),
            jf: (data.jf += match.player2Score),
            jc: (data.jc += match.player1Score),
            dif: (data.dif += match.player2Score - match.player1Score)
          };
        }

        return data;
      },

      { ...playerData, pj: 0, pg: 0, pp: 0, jf: 0, jc: 0, dif: 0 }
    );

    const winningPoints: number = newData.pg * 3;
    const losingPoints: number = newData.pp * 1;
    const rankingPoints: number = winningPoints + losingPoints;

    return { newData, matchScore: updatedMatches, rankingPoints };
  });

  const sortedPlayersByRanking = playersDataToShow.sort((a, b) => {
    if (a.rankingPoints === b.rankingPoints) {
      return b.newData.dif - a.newData.dif;
    }

    return b.rankingPoints - a.rankingPoints;
  });

  return (
    <table className="w-full md:w-8/12 xl:w-5/12">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Jugador</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PP</th>
          <th>JF</th>
          <th>JC</th>
          <th>Dif</th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayersByRanking.map(({ newData }, index) => (
          <Player key={index} playerData={newData} ranking={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
