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
