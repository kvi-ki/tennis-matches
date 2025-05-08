import data from '../../public/leagueData.json';
import React, { useEffect, useState } from 'react';
import DivisionCards from '@/components/divisionCards/DivisionCards';
import MonthlyBoard, {
  MonthlyDataProps
} from '@/components/monthlyBoard.tsx/MonthlyBoard';

const formattedData: MonthlyDataProps[] = data.map((month) => {
  const monthData = month.monthData;

  return {
    month: month.month,
    monthData: monthData.map((data) => {
      return {
        division: data.division,
        playersData: data.players.map((data) => {
          return {
            name: data,
            pj: 0,
            pg: 0,
            pp: 0,
            jf: 0,
            jc: 0,
            dif: 0
          };
        }),
        matches: data.matches
      };
    })
  };
});

function App() {
  const lastMonth: string = data[data.length - 1].month;
  const lastMonthData: MonthlyDataProps | undefined = formattedData.find(
    (data) => data.month === lastMonth
  );

  const [selectedMonth, setSelectedMonth] = useState(lastMonth);
  const [monthData, setMonthData] = useState(lastMonthData);

  useEffect(() => {
    const chosenMonth = formattedData.find(
      (data) => selectedMonth && selectedMonth === data.month
    );

    setMonthData(chosenMonth);
  }, [selectedMonth]);

  return (
    <main className="flex flex-col items-center">
      <menu className="w-full m-4 bg-white fixed top-0 z-99">
        <ul className="flex justify-center gap-4">
          {formattedData.map((data) => {
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
