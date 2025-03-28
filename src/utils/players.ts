import { MatchScoreProps } from '@/components/match/Match';
import { PlayerProps } from '@/components/player/Player';
import { PlayersTableProps } from '@/components/table/Table';
import { Match } from '@testing-library/react';

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

const getPlayersStatus = (match: MatchScoreProps, playerData: PlayerProps) => {
  const player1IsWinner =
    match.theWinner === playerData.name &&
    match.player1Name === playerData.name;

  const player2IsWinner =
    match.theWinner === playerData.name &&
    match.player2Name === playerData.name;

  const player1DidNotWin =
    match.theWinner !== playerData.name &&
    match.player1Name === playerData.name;

  const player2DidNotWin =
    match.theWinner !== playerData.name &&
    match.player2Name === playerData.name;

  return {
    player1IsWinner,
    player2IsWinner,
    player1DidNotWin,
    player2DidNotWin
  };
};

export const updatePlayersData = (
  matches: MatchScoreProps[],
  playerData: PlayerProps
) => {
  return matches.reduce(
    (data: PlayerProps, match: MatchScoreProps) => {
      const {
        player1IsWinner,
        player2IsWinner,
        player1DidNotWin,
        player2DidNotWin
      } = getPlayersStatus(match, playerData);

      if (player1IsWinner) {
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

      if (player2IsWinner) {
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

      if (player1DidNotWin) {
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

      if (player2DidNotWin) {
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

export const getPlayerRankingPoints = (playerData: PlayerProps) => {
  const winningPoints: number = playerData.pg * 3;
  const losingPoints: number = playerData.pp * 1;
  const rankingPoints: number = winningPoints + losingPoints;

  return rankingPoints;
};

export const processPlayersData = (
  playersData: PlayerProps[],
  matchesScores: MatchScoreProps[]
) => {
  return playersData.map((playerData) => {
    const updatedMatches = filterPlayersByPlayedMatches(
      matchesScores,
      playerData
    );

    const newData = updatePlayersData(updatedMatches, playerData);

    const rankingPoints: number = getPlayerRankingPoints(newData);

    return { newData, matchScore: updatedMatches, rankingPoints };
  });
};

export const sortPlayrsByRankingPoints = (playersData: PlayersTableProps[]) => {
  return playersData.sort((a, b) => {
    if (a.rankingPoints === b.rankingPoints) {
      return b.newData.dif - a.newData.dif;
    }

    return b.rankingPoints - a.rankingPoints;
  });
};
