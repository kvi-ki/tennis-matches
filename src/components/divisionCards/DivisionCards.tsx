import DivisionCard from '../divisionCard/DivisionCard';
import { LeagueDataProps } from '../leagueData/LeagueData';

export default function DivisionCards({
  leagueData
}: {
  leagueData: LeagueDataProps[];
}) {
  return (
    <li>
      {leagueData.map((league, index: number) => {
        return (
          <ul key={index}>
            <DivisionCard league={league} />
          </ul>
        );
      })}
    </li>
  );
}
