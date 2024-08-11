import History from './../components/History';
import Board from './../components/Board';
import S from '@/styles/pages/Game.module.css';
import {
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  checkWinner,
} from './../constants';
import { useState } from 'react';

function Game() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const handlePlay = (index) => () => {
    if (winnerInfo) {
      alert(`게임 종료! 승자는 ${winnerInfo.winner} 축하해!`);
      return;
    }
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        return squareIndex === index ? nextPlayer : square;
      });
      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);

  const isPlayerOneTurn = squares.filter(Boolean).length % PLAYER_COUNT === 0;

  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  const isDraw = !winnerInfo && squares.every(Boolean);
  return (
    <div className={S.component}>
      <Board
        squares={squares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlay}
        isDraw={isDraw}
      />
      <History />
    </div>
  );
}

export default Game;
