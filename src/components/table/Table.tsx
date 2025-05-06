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
    <table className="shadow-[0_0_25px_rgb(0,0,0,0.1)] rounded-xl border-collapse overflow-hidden w-full m-10 md:w-8/12 xl:w-6/12">
      <thead>
        <tr className="border-b border-navy">
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
