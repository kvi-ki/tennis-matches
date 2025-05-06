import DivisionCard from '../divisionCard/DivisionCard';
import { LeagueDataProps } from '../leagueData/LeagueData';

export default function DivisionCards({
  leagueData
}: {
  leagueData: LeagueDataProps[];
}) {
  return (
    <ul>
      {leagueData.map((league, index: number) => {
        return (
          <li
            key={index}
            className="m-4 pb-14 flex flex-col items-center border-b border-[#e2e1e1]"
          >
            <DivisionCard league={league} />
          </li>
        );
      })}
    </ul>
  );
}
