import { JSX, useContext, useEffect, useState } from 'react';
import Player, { PlayerProps } from '../player/Player';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';

export default function Table({ playersData }: { playersData: PlayerProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { matchesScores } = context;
  const [playersDataToShow, setPlayersDataToShow] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updatedPlayersData = playersData.map(
      (playerData: PlayerProps, index: number) => {
        const matchesPlayedByThisPlayer = matchesScores.filter(
          (match) =>
            match.player1Name === playerData.name ||
            match.player2Name === playerData.name
        );

        const updatedMatches = matchesPlayedByThisPlayer.filter(
          (match) => match.player1Score > 0 || match.player2Score > 0
        );

        return (
          <Player
            key={index}
            playerData={playerData}
            matchScore={updatedMatches}
          />
        );
      }
    );

    setPlayersDataToShow(updatedPlayersData);
  }, [matchesScores]);

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
      <tbody>{playersDataToShow}</tbody>
    </table>
  );
}
