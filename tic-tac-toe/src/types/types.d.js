import { arrayOf, func, oneOf, number, shape } from 'prop-types';
import { PLAYER_LIST } from './../constants';

const OneOfPlayerType = oneOf(PLAYER_LIST);
const OneOfPlayerListType = arrayOf(OneOfPlayerType);
const WinnerInfoType = shape({
  winner: OneOfPlayerType,
  condition: arrayOf(number),
});

export const SquaresPropTypes = {
  onPlay: func,
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
};
