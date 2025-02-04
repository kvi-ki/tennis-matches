export type MatchProps = {
  player1: string;
  player2: string;
  score: string;
};

export type MatchScoreProps = {
  player1Name: string;
  player2Name: string;
  player1Score: string;
  player2Score: string;
  theWinner: string;
};

export default function Match({ match }: { match: MatchProps }) {
  return (
    <li className="p-1.5 ml-6 text-gray text-textMatches font-semibold md:text-textMd lg:text-textLg">
      <span className="m-2">&#9643;</span> {match.player1} vs {match.player2}{' '}
      {match.score}
    </li>
  );
}
