import Status from './Status';
import Squares from './Squares';
import S from '../styles/components/Board.module.css';
import { BoardPropTypes } from '@/types/types.d';

Board.propTypes = BoardPropTypes;

function Board({ winnerInfo, nextPlayer, isDraw, squares, onPlay }) {
  return (
    <div className={S.component}>
      <Status
        winner={winnerInfo?.winner}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
      />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={onPlay} />
    </div>
  );
}

export default Board;
