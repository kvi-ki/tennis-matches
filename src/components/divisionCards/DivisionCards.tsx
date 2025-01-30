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
          <li key={index}>
            <DivisionCard league={league} />
          </li>
        );
      })}
    </ul>
  );
}
