import History from './../components/History';
import Board from './../components/Board';
import S from '@/styles/pages/Game.module.css';

function Game() {
  return (
    <div className={S.component}>
      <Board />
      <History />
    </div>
  );
}

export default Game;
