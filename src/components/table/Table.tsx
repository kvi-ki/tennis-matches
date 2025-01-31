import Player, { PlayerProps } from '../player/Player';

export default function Table({ playersData }: { playersData: PlayerProps[] }) {
  const showPlayersData = () => {
    return playersData.map((playerData: PlayerProps, index: number) => {
      return <Player key={index} {...playerData} />;
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
