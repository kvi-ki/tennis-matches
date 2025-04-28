import data from '../../public/leagueData.json';
import React from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';

function App() {
  return (
    <main>
      <DivisionCards leagueData={data} />
    </main>
  );
}

export default App;
