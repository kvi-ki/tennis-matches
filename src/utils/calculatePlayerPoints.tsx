import { MatchScoreProps } from '@/components/match/Match';
import { PlayerProps } from '@/components/player/Player';

export const calculatePlayerPoints = (
  prev: PlayerProps,
  matchScore: MatchScoreProps[]
) => {
  let newData = { ...prev };

  matchScore.map((match: MatchScoreProps) => {
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

    if (match.player1Name !== prev.name && match.player2Name !== prev.name) {
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
};
