import { MatchScoreProps } from '../match/Match';

export type PlayerProps = {
  name: string;
  pj: string;
  pg: string;
  pp: string;
  jf: string;
  jc: string;
  dif: string;
};

export default function Player({
  playerData,
  matchScore
}: {
  playerData: PlayerProps;
  matchScore: MatchScoreProps;
}) {
  return (
    <tr>
      <td className="font-semibold text-left pl-2">{playerData.name}</td>
      <td>{playerData.pj}</td>
      <td>{playerData.pg}</td>
      <td>{playerData.pp}</td>
      <td>{playerData.jf}</td>
      <td>{playerData.jc}</td>
      <td>{playerData.dif}</td>
    </tr>
  );
}
