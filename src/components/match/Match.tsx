export type MatchProps = {
  player1: string;
  player2: string;
  result: string;
};

export default function Match({ match }: { match: MatchProps }) {
  return (
    <ul>
      {match.player1} vs {match.player2}
    </ul>
  );
}
