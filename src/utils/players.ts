import { MatchScoreProps } from '@/components/match/Match';
import { PlayerProps } from '@/components/player/Player';

export const filterPlayersByPlayedMatches = (
  matchesScores: MatchScoreProps[],
  playerData: PlayerProps
) => {
  const matchesPlayedByThisPlayer = matchesScores.filter(
    (match) =>
      match.player1Name === playerData.name ||
      match.player2Name === playerData.name
  );

  const updatedMatches = matchesPlayedByThisPlayer.filter(
    (match) => match.player1Score > 0 || match.player2Score > 0
  );

  return updatedMatches;
};

export const updatePlayersData = (
  matches: MatchScoreProps[],
  playerData: PlayerProps
) => {
  return matches.reduce(
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
};
