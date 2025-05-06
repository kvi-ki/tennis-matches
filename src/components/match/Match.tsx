export type MatchProps = {
  player1: string;
  player2: string;
  score: string;
};

export type MatchScoreProps = {
  player1Name: string;
  player2Name: string;
  player1Score: number;
  player2Score: number;
  theWinner: string;
};

export default function Match({ match }: { match: MatchProps }) {
  function getScore() {
    const firstPlayerScore: string = match.score.split('-')[0];
    const secondPlayerScore: string = match.score.split('-')[1];

    return {
      score1: firstPlayerScore,
      score2: secondPlayerScore
    };
  }

  const score = getScore();

  return (
    <li className="my-8 w-8/12 grid grid-flow-row grid-cols-3 text-center text-darkGray text-textMatches font-semibold md:text-textMd">
      <p className="p-2 col-span-2">{match.player1}</p>
      <p className="p-2 border-l border-blue">{score.score1}</p>
      <p className="p-2 col-span-2 border-t border-blue">{match.player2}</p>
      <p className="p-2 border-t border-l border-blue">{score.score2}</p>
    </li>
  );
}
