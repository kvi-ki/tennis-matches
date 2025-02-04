import data from '../../leagueData.json';
import React, { useEffect, useState } from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';
import { LeagueDataProps } from '@/components/leagueData/LeagueData';

function App() {
  const [leagueData, setLeagueData] = useState<LeagueDataProps[]>(data);

  useEffect(() => {
    setLeagueData(data);
  }, [data]);

  return <DivisionCards leagueData={leagueData} />;
}

export default App;
