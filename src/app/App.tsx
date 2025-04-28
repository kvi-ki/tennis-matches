import data from '../../public/leagueData.json';
import React from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';
import MonthlyBoard from '@/components/monthlyBoard.tsx/MonthlyBoard';

function App() {
  return (
    <main>
      <menu className="m-4 flex justify-center">
        <ul className="flex gap-4">
          {data.map((data) => {
            return (
              <li>
                <MonthlyBoard monthData={data} />
              </li>
            );
          })}
        </ul>
      </menu>
      <DivisionCards leagueData={data[2].monthData} />
    </main>
  );
}

export default App;
