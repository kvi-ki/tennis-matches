import { LeagueDataProps } from '../leagueData/LeagueData';
import Header from '../header/Header';
import Table from '../table/Table';
import { PlayerProps } from '../player/Player';
import Matches from '../matches/Matches';
import { MatchProps, MatchScoreProps } from '../match/Match';
import { useState, createContext } from 'react';

type MatchesContextType = {
  matchesScores: MatchScoreProps[];
  setMatchesScores: React.Dispatch<React.SetStateAction<MatchScoreProps[]>>;
};

export const MatchesGlobalStateContext = createContext<MatchesContextType>({
  matchesScores: [],
  setMatchesScores: () => {}
});

export default function DivisionCard({ league }: { league: LeagueDataProps }) {
  const [matchesScores, setMatchesScores] = useState<MatchScoreProps[]>([]);

  const divisionNumber: string = league.division;
  const playersData: PlayerProps[] = league.playersData;
  const matches: MatchProps[] = league.matches;

  return (
    <MatchesGlobalStateContext.Provider
      value={{ matchesScores, setMatchesScores }}
    >
      <>
        <Header divisionNumber={divisionNumber} />
        <Table playersData={playersData} />
        <Matches matches={matches} />
      </>
    </MatchesGlobalStateContext.Provider>
  );
}
