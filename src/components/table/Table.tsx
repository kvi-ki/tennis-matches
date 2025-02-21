import { useContext } from 'react';
import Player, { PlayerProps } from '../player/Player';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';
import { MatchScoreProps } from '../match/Match';
import { processPlayersData, sortPlayrsByRankingPoints } from '@/utils/players';

export type PlayersTableProps = {
  newData: {
    pj: number;
    pg: number;
    pp: number;
    jf: number;
    jc: number;
    dif: number;
    name: string;
  };
  matchScore: MatchScoreProps[];
  rankingPoints: number;
};

export default function Table({ playersData }: { playersData: PlayerProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { matchesScores } = context;

  const processedPlayersData: PlayersTableProps[] = processPlayersData(
    playersData,
    matchesScores
  );

  const sortedPlayersByRanking: PlayersTableProps[] =
    sortPlayrsByRankingPoints(processedPlayersData);

  return (
    <table className="w-full md:w-8/12 xl:w-5/12">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Jugador</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PP</th>
          <th>JF</th>
          <th>JC</th>
          <th>Dif</th>
        </tr>
      </thead>
      <tbody>
        {sortedPlayersByRanking.map(({ newData }, index) => (
          <Player key={index} playerData={newData} ranking={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
