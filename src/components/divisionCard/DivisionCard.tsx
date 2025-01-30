import { LeagueDataProps } from '../leagueData/LeagueData';
import Header from '../header/Header';
import Table from '../table/Table';
import { PlayerProps } from '../player/Player';
import Matches from '../matches/Matches';

export default function DivisionCard({ league }: { league: LeagueDataProps }) {
  const divisionNumber: string = league.division;
  const players: PlayerProps[] = league.data;

  return (
    <div className="m-4 flex flex-col items-center">
      <Header divisionNumber={divisionNumber} />
      <Table players={players} />
      <Matches />
    </div>
  );
}
