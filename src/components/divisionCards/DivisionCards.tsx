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
          <li key={index} className="m-4 flex flex-col items-center">
            <DivisionCard league={league} />
          </li>
        );
      })}
    </ul>
  );
}
