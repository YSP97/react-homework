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
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(0);

  const currentSquares = gameHistory[gameIndex];
  const winnerInfo = checkWinner(currentSquares);

  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0;

  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  const handlePlay = (index) => () => {
    if (winnerInfo) {
      alert(`게임 종료! 승자는 ${winnerInfo.winner} 축하해!`);
      return;
    }

    const nextGameIndex = gameIndex + 1;
    setGameIndex(nextGameIndex);

    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });

    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares,
    ];

    setGameHistory(nextGameHistory);
  };

  const handleTimeTravel = (index) => {
    setGameIndex(index);
  };

  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlay}
        isDraw={isDraw}
      />
      <History
        gameHistory={gameHistory}
        onTimeTravel={handleTimeTravel}
        gameIndex={gameIndex}
      />
    </div>
  );
}

export default Game;
