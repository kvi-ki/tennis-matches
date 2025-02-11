import data from '../../public/leagueData.json';
import React from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';

function App() {
  return <DivisionCards leagueData={data} />;
}

export default App;
