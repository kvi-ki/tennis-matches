import data from '../../mock.json';
import React, { useState } from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';

function App() {
  const [leagueData, setLeagueData] = useState(data);

  return <DivisionCards leagueData={leagueData} />;
}

export default App;
