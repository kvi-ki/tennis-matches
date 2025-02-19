import { useContext } from 'react';
import Player, { PlayerProps } from '../player/Player';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';
import { MatchScoreProps } from '../match/Match';

export default function Table({ playersData }: { playersData: PlayerProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { matchesScores } = context;

  const playersDataToShow = playersData.map((playerData) => {
    const matchesPlayedByThisPlayer = matchesScores.filter(
      (match) =>
        match.player1Name === playerData.name ||
        match.player2Name === playerData.name
    );

    const updatedMatches = matchesPlayedByThisPlayer.filter(
      (match) => match.player1Score > 0 || match.player2Score > 0
    );

    let newData = {
      ...playerData,
      pj: playerData.pj || 0,
      pg: playerData.pg || 0,
      pp: playerData.pp || 0,
      jf: playerData.jf || 0,
      jc: playerData.jc || 0,
      dif: playerData.dif || 0
    };

    updatedMatches.forEach((match: MatchScoreProps) => {
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
        newData.pj += 1;
        newData.pg += 1;
        newData.pp;
        newData.jf += match.player1Score;
        newData.jc += match.player2Score;
        newData.dif += match.player1Score - match.player2Score;
      }

      if (winnerPlayer2) {
        newData.pj += 1;
        newData.pg += 1;
        newData.pp;
        newData.jf += match.player2Score;
        newData.jc += match.player1Score;
        newData.dif += match.player2Score - match.player1Score;
      }

      if (notWinnerPlayer1) {
        newData.pj += 1;
        newData.pg;
        newData.pp += 1;
        newData.jf += match.player1Score;
        newData.jc += match.player2Score;
        newData.dif += match.player1Score - match.player2Score;
      }

      if (notWinnerPlayer2) {
        newData.pj += 1;
        newData.pg;
        newData.pp += 1;
        newData.jf += match.player2Score;
        newData.jc += match.player1Score;
        newData.dif += match.player2Score - match.player1Score;
      }

      if (
        match.player1Name !== playerData.name &&
        match.player2Name !== playerData.name
      ) {
        newData;
      }
    });

    const winningPoints: number = newData.pg * 3;
    const losingPoints: number = newData.pp * 1;
    const rankingPoints: number = winningPoints + losingPoints;

    return { newData, matchScore: updatedMatches, rankingPoints };
  });

  const sortedPlayersByRanking = playersDataToShow.sort(
    (a, b) => b.rankingPoints - a.rankingPoints
  );

  console.log(sortedPlayersByRanking);

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
