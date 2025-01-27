export type PlayerProps = {
  player: string;
  pj: string;
  pg: string;
  pp: string;
  jf: string;
  jc: string;
  dif: string;
};

export default function Player(player: PlayerProps) {
  return (
    <tr>
      <td>{player.player}</td>
      <td>{player.pj}</td>
      <td>{player.pg}</td>
      <td>{player.pp}</td>
      <td>{player.jf}</td>
      <td>{player.jc}</td>
      <td>{player.dif}</td>
    </tr>
  );
}
