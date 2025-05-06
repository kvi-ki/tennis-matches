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
    <section className="self-start w-full">
      <button
        className="mb-6 px-4 border-b text-navy text-header2 text-semibold hover:text-blue cursor-pointer"
        onClick={toggleMatches}
      >
        Partidos
      </button>
      <ul
        className={`${matchesAreHidden ? 'hidden' : 'visible'} flex flex-col pl-20`}
      >
        {matches.map((match: MatchProps, index: number) => {
          return <Match match={match} key={index} />;
        })}
      </ul>
    </section>
  );
}
