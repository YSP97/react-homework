import { arrayOf, func, oneOf, number, shape } from 'prop-types';
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
