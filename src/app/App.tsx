import data from '../../leagueData.json';
import React, { useState } from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';

function App() {
  const [leagueData, setLeagueData] = useState(data);

  return <DivisionCards leagueData={leagueData} />;
}

export default App;
