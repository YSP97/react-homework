import Square from './Square';
import S from '../styles/components/Squares.module.css';
import { WINNERS_COLOR } from './../constants';
import { SquaresPropTypes } from '../types/types.d';

Squares.propTypes = SquaresPropTypes;

function Squares({ squares, onPlay, winnerInfo }) {
  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyle = {
          backgroundColor: null,
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if (index === x || index === y || index === z) {
            winnerStyle.backgroundColor = WINNERS_COLOR;
          }
        }
        return (
          <Square key={index} onPlay={onPlay(index)} style={winnerStyle}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
