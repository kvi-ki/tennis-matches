import { LeagueDataProps } from '../leagueData/LeagueData';

export type MonthlyDataProps = {
  month: string;
  monthData: LeagueDataProps[];
};

export default function MonthlyBoard({
  monthData,
  selectedMonth,
  onClick
}: {
  monthData: MonthlyDataProps;
  selectedMonth: string;
  onClick: (event: any) => void;
}) {
  const monthIsSelected = selectedMonth === monthData.month;

  return (
    <button
      onClick={onClick}
      className={`${monthIsSelected ? 'text-blue' : 'text-gray'} font-medium mt-4 w-20 text-textLg text-center text-semibold cursor-pointer hover:text-blue md:w-28`}
    >
      {monthData.month}
    </button>
  );
}
