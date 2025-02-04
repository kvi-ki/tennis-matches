import data from '../../leagueData.json';
import React from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';
import { LeagueDataProps } from '@/components/leagueData/LeagueData';

function App() {
  const leagueData: LeagueDataProps[] = data;

  return <DivisionCards leagueData={leagueData} />;
}

export default App;
