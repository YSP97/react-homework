import Status from './Status';
import Squares from './Squares';
import S from '@/styles/components/Board.module.css';

function Board() {
  return (
    <div className={S.component}>
      <Status />
      <Squares />
    </div>
  );
}

export default Board;
