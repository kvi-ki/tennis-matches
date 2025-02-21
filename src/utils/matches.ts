import { MatchProps, MatchScoreProps } from '@/components/match/Match';

export const processMatchesData = (matches: MatchProps[]) => {
  return matches.map((match) => {
    const scoreStringBeforeDash: string = match.score.split('-')[0];
    const scoreStringAfterDash: string = match.score.split('-')[1];
    const player1Score: number = Number(scoreStringBeforeDash);
    const player2Score: number = Number(scoreStringAfterDash);

    const theWinner: string =
      player1Score > player2Score
        ? match.player1
        : player2Score > player1Score
          ? match.player2
          : 'None';

    const matchScore: MatchScoreProps = {
      player1Name: match.player1,
      player2Name: match.player2,
      player1Score: player1Score ? player1Score : 0,
      player2Score: player2Score ? player2Score : 0,
      theWinner: theWinner
    };

    return matchScore;
  });
};
