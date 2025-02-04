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
  const initialMatchesScores: MatchScoreProps[] = league.matches.map(
    (match) => {
      return {
        player1Name: match.player1,
        player2Name: match.player2,
        player1Score: Number(match.score[0]),
        player2Score: Number(match.score[match.score.length - 1]),
        theWinner: ''
      };
    }
  );

  const [matchesScores, setMatchesScores] =
    useState<MatchScoreProps[]>(initialMatchesScores);

  return (
    <>
      <Header divisionNumber={divisionNumber} />
      <Table playersData={playersData} matchesScores={matchesScores} />
      <Matches matches={matches} setMatchesScores={setMatchesScores} />
    </>
  );
}
