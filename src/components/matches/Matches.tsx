import { useEffect, useState } from 'react';
import Match, { MatchProps, MatchScoreProps } from '../match/Match';

export default function Matches({
  matches,
  setMatchesScores
}: {
  matches: MatchProps[];
  setMatchesScores: React.Dispatch<React.SetStateAction<MatchScoreProps[]>>;
}) {
  useEffect(() => {
    const matchesScores: MatchScoreProps[] = matches.map((match) => {
      const score: string = match.score;
      const player1Score: number = Number(score[0]);
      const player2Score: number = Number(score[score.length - 1]);

      const theWinner: string =
        player1Score > player2Score
          ? match.player1
          : player2Score > player1Score
            ? match.player2
            : 'None';

      const matchScore: MatchScoreProps = {
        player1Name: match.player1,
        player2Name: match.player2,
        player1Score: player1Score ? player1Score : 0,
        player2Score: player2Score ? player2Score : 0,
        theWinner: theWinner
      };

      return matchScore;
    });

    setMatchesScores(matchesScores);
  }, [matches]);

  const [matchesAreHidden, setMatchesAreHidden] = useState(true);

  const toggleMatches = () => {
    setMatchesAreHidden((prev) => !prev);
  };

  return (
    <section className="border border-navy mt-4 w-full md:w-9/12 xl:w-6/12">
      <h2
        className="border-b text-navy text-header2 text-center text-semibold hover:text-green cursor-pointer lg:text-header2Lg"
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
