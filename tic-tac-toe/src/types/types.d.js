import { arrayOf, func, oneOf, number, shape, bool } from 'prop-types';
import { PLAYER_LIST } from './../constants';

export const OneOfPlayerType = oneOf(PLAYER_LIST);
export const OneOfPlayerListType = arrayOf(OneOfPlayerType);
export const WinnerInfoType = shape({
  winner: OneOfPlayerType,
  condition: arrayOf(number),
});

export const SquaresPropTypes = {
  onPlay: func,
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
};

export const BoardPropTypes = {
  winnerInfo: WinnerInfoType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool.isRequired,
  squares: OneOfPlayerListType,
  onPlay: func,
};

export const statusPropTypes = {
  winner: OneOfPlayerType,
  isDraw: bool,
  nextPlayer: OneOfPlayerType.isRequired,
};

export const HistoryPropTypes = {
  gameIndex: number.isRequired,
  gameHistory: arrayOf(OneOfPlayerListType),
  onTimeTravel: func,
};
