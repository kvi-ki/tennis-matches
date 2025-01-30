export type MatchProps = {
  player1: string;
  player2: string;
  result: string;
};

export default function Match({ match }: { match: MatchProps }) {
  return (
    <li className="p-1 text-gray text-textMatches font-semibold md:text-textMd lg:text-textLg">
      {match.player1} vs {match.player2} {match.result}
    </li>
  );
}
