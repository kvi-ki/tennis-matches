import DivisionCard from '../divisionCard/DivisionCard';
import { LeagueDataProps } from '../leagueData/LeagueData';

export default function DivisionCards({
  leagueData
}: {
  leagueData: LeagueDataProps[];
}) {
  return (
    <li>
      {leagueData.map((league) => {
        return (
          <ul>
            <DivisionCard league={league} />{' '}
          </ul>
        );
      })}
    </li>
  );
}
