import Match, { MatchProps } from '../match/Match';

export default function Matches({ matches }: { matches: MatchProps[] }) {
  return (
    <section className="border border-navy mt-4 w-full md:w-8/12 xl:w-5/12">
      <h2 className="border-b text-navy text-header2 text-center text-semibold p-1 lg:text-header2Lg">
        Partidos
      </h2>
      <ul>
        {matches.map((match: MatchProps, index: number) => {
          return <Match match={match} key={index} />;
        })}
      </ul>
    </section>
  );
}
