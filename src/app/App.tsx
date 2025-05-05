import data from '../../public/leagueData.json';
import React, { useEffect, useState } from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';
import MonthlyBoard, {
  MonthlyDataProps
} from '@/components/monthlyBoard.tsx/MonthlyBoard';

function App() {
  const lastMonth: string = data[data.length - 1].month;
  const lastMonthData: MonthlyDataProps | undefined = data.find(
    (data) => data.month === lastMonth
  );

  const [selectedMonth, setSelectedMonth] = useState(lastMonth);
  const [monthData, setMonthData] = useState(lastMonthData);

  useEffect(() => {
    const chosenMonth = data.find(
      (data) => selectedMonth && selectedMonth === data.month
    );

    setMonthData(chosenMonth);
  }, [selectedMonth]);

  return (
    <main>
      <menu className="m-4 flex justify-center">
        <ul className="flex gap-4">
          {data.map((data) => {
            return (
              <li key={data.month}>
                <MonthlyBoard
                  monthData={data}
                  selectedMonth={selectedMonth}
                  onClick={() => setSelectedMonth(data.month)}
                />
              </li>
            );
          })}
        </ul>
      </menu>
      {monthData && <DivisionCards leagueData={monthData.monthData} />}
    </main>
  );
}

export default App;
