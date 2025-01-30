import Match, { MatchProps } from '../match/Match';

export default function Matches({ matches }: { matches: MatchProps[] }) {
  return (
    <section>
      <h2>Partidos</h2>
      <li>
        {matches.map((match: MatchProps, index: number) => {
          return <Match match={match} key={index} />;
        })}
      </li>
    </section>
  );
}
