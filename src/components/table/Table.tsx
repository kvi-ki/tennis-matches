import { useState } from 'react';
import Player, { PlayerProps } from '../player/Player';
import playersData from '../../../mock.json';
import { Data } from '../data/Data';

export default function Table() {
  const [players, setPlayers] = useState(playersData);

  const showPlayersData = () => {
    return (players as Data[]).map((playersData: Data) => {
      return getPlayersList(playersData.data);
    });
  };

  const getPlayersList = (players: PlayerProps[]) => {
    return players.map((player: PlayerProps, index: number) => {
      return <Player key={index} {...player} />;
    });
  };

  return (
    <table className="w-full border border-nav md:w-10/12 lg:w-4/12">
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
