import DivisionCard from '../divisionCard/DivisionCard';
import { LeagueDataProps } from '../leagueData/LeagueData';

export default function DivisionCards({
  leagueData
}: {
  leagueData: LeagueDataProps[];
}) {
  return (
    <ul className="w-full lg:w-8/12 xl:w-6/12">
      {leagueData.map((league, index: number) => {
        return (
          <li
            key={index}
            className="m-4 pb-8 flex flex-col items-center border-b border-[#e2e1e1]"
          >
            <DivisionCard league={league} />
          </li>
        );
      })}
    </ul>
  );
}
