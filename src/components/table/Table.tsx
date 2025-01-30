import Player, { PlayerProps } from '../player/Player';

export default function Table({ players }: { players: PlayerProps[] }) {
  const showPlayersData = () => {
    return players.map((player: PlayerProps, index: number) => {
      return <Player key={index} {...player} />;
    });
  };

  return (
    <table className="w-full md:w-8/12 xl:w-5/12">
      <thead>
        <tr>
          <th>Jugador</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PP</th>
          <th>JF</th>
          <th>JC</th>
          <th>Dif</th>
        </tr>
      </thead>
      <tbody>{showPlayersData()}</tbody>
    </table>
  );
}
