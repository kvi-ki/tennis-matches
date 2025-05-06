import { useContext, useEffect, useState } from 'react';
import Match, { MatchProps, MatchScoreProps } from '../match/Match';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';
import { processMatchesData } from '@/utils/matches';

export default function Matches({ matches }: { matches: MatchProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { setMatchesScores } = context;

  useEffect(() => {
    const matchesScores: MatchScoreProps[] = processMatchesData(matches);

    setMatchesScores(matchesScores);
  }, [matches]);

  const [matchesAreHidden, setMatchesAreHidden] = useState(true);

  const toggleMatches = () => {
    setMatchesAreHidden((prev) => !prev);
  };

  return (
    <section className="border border-navy mt-4 w-full md:w-9/12 xl:w-6/12">
      <h2
        className="border-b text-navy text-header2 text-center text-semibold hover:text-blue cursor-pointer"
        onClick={toggleMatches}
      >
        Partidos
      </h2>
      <ul className={matchesAreHidden ? 'hidden' : 'visible'}>
        {matches.map((match: MatchProps, index: number) => {
          return <Match match={match} key={index} />;
        })}
      </ul>
    </section>
  );
}
