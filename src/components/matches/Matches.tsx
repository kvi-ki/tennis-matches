import { useState } from 'react';
import Match, { MatchProps } from '../match/Match';

export default function Matches({ matches }: { matches: MatchProps[] }) {
  const [matchesAreHidden, setMatchesAreHidden] = useState(true);

  const toggleMatches = () => {
    setMatchesAreHidden((prev) => !prev);
  };

  return (
    <section className="border border-navy mt-4 w-full md:w-8/12 xl:w-5/12">
      <h2
        className="border-b text-navy text-header2 text-center text-semibold p-1 hover:text-green cursor-pointer lg:text-header2Lg"
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
