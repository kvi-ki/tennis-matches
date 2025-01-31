import { LeagueDataProps } from '../leagueData/LeagueData';
import Header from '../header/Header';
import Table from '../table/Table';
import { PlayerProps } from '../player/Player';
import Matches from '../matches/Matches';
import { MatchProps } from '../match/Match';

export default function DivisionCard({ league }: { league: LeagueDataProps }) {
  const divisionNumber: string = league.division;
  const playersData: PlayerProps[] = league.playersData;
  const matches: MatchProps[] = league.matches;

  return (
    <div className="m-4 flex flex-col items-center">
      <Header divisionNumber={divisionNumber} />
      <Table playersData={playersData} />
      <Matches matches={matches} />
    </div>
  );
}
