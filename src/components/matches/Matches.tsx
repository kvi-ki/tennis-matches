import { useContext, useEffect, useRef, useState } from 'react';
import Match, { MatchProps, MatchScoreProps } from '../match/Match';
import { MatchesGlobalStateContext } from '../divisionCard/DivisionCard';

export default function Matches({ matches }: { matches: MatchProps[] }) {
  const context = useContext(MatchesGlobalStateContext);

  if (!context) {
    throw new Error('MatchesGlobalStateContext must be used within a Provider');
  }

  const { setMatchesScores } = context;

  useEffect(() => {
    const matchesScoresArray: MatchScoreProps[] = matches.map((match) => {
      const scoreStringBeforeDash: string = match.score.split('-')[0];
      const scoreStringAfterDash: string = match.score.split('-')[1];
      const player1Score: number = Number(scoreStringBeforeDash);
      const player2Score: number = Number(scoreStringAfterDash);

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

    setMatchesScores(matchesScoresArray);
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
