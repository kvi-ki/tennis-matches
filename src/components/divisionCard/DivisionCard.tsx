import { LeagueDataProps } from '../leagueData/LeagueData';
import Header from '../header/Header';
import Table from '../table/Table';
import { PlayerProps } from '../player/Player';
import Matches from '../matches/Matches';
import { MatchProps, MatchScoreProps } from '../match/Match';
import { useState } from 'react';

export default function DivisionCard({ league }: { league: LeagueDataProps }) {
  const divisionNumber: string = league.division;
  const playersData: PlayerProps[] = league.playersData;
  const matches: MatchProps[] = league.matches;

  const [matchesScores, setMatchesScores] = useState<MatchScoreProps[]>([]);

  return (
    <div className="m-4 flex flex-col items-center">
      <Header divisionNumber={divisionNumber} />
      <Table playersData={playersData} matchesScores={matchesScores} />
      <Matches matches={matches} setMatchesScores={setMatchesScores} />
    </div>
  );
}
