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
    </tr>
  );
}
