import { LeagueDataProps } from '../leagueData/LeagueData';

export type MonthlyDataProps = {
  month: string;
  monthData: LeagueDataProps[];
};

export default function MonthlyBoard({
  monthData,
  onClick
}: {
  monthData: MonthlyDataProps;
  onClick: (event: any) => void;
}) {
  return (
    <div className="mt-4">
      <button
        onClick={onClick}
        className="w-20 border border-navy text-navy text-textMd text-center text-semibold hover:text-green cursor-pointer md:w-28"
      >
        {monthData.month}
      </button>
    </div>
  );
}
