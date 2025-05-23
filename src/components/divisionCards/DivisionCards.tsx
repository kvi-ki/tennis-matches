import DivisionCard from '../divisionCard/DivisionCard';
import { LeagueDataProps } from '../leagueData/LeagueData';

export default function DivisionCards({
  leagueData
}: {
  leagueData: LeagueDataProps[];
}) {
  return (
    <ul className="w-full mt-10 lg:w-10/12 xl:w-7/12">
      {leagueData.map((league, index: number) => {
        return (
          <li
            key={index}
            className="my-4 pb-8 px-2 w-full flex flex-col items-center border-b border-[#e2e1e1] md:px-16"
          >
            <DivisionCard league={league} />
          </li>
        );
      })}
    </ul>
  );
}
