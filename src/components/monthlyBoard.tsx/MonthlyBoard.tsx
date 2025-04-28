import { useState } from 'react';
import DivisionCards from '../divisionCards/DivisionCards';
import { LeagueDataProps } from '../leagueData/LeagueData';

export type MonthlyDataProps = {
  month: string;
  monthData: LeagueDataProps[];
};

export default function MonthlyBoard({
  monthData
}: {
  monthData: MonthlyDataProps;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className="mt-4">
      <h2
        onClick={handleOpen}
        className="w-20 border border-navy text-navy text-textMd text-center text-semibold hover:text-green cursor-pointer md:w-28"
      >
        {monthData.month}
      </h2>
      <section className={isOpen ? '' : 'hidden'}>
        <div>
          <DivisionCards leagueData={monthData.monthData} />
        </div>
      </section>
    </div>
  );
}
