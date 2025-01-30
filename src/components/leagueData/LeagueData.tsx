import { MatchProps } from '../match/Match';
import { PlayerProps } from '../player/Player';

export type LeagueDataProps = {
  division: string;
  data: PlayerProps[];
  matches: MatchProps[];
};
