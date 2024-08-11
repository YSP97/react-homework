import Status from './Status';
import Squares from './Squares';
import S from '../styles/components/Board.module.css';
import {
  INITIAL_SQUARES,
  PLAYER,
  checkWinner,
} from './../constants';
import { useState } from 'react';

function Board() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const handlePlay = (index) => () => {
    if (winnerInfo) {
      alert(`게임 종료! 승자는 ${winnerInfo.winner} 축하해!`);
      return;
    }
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }

        return square;
      });
      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);

  // 게임 순서 index
  const gameIndex = squares.filter(Boolean).length % Object.keys(PLAYER).length;

  // gameIndex에 따른 현재 플레이어(왔다리 갔다리..)
  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;
  return (
    <div className={S.component}>
      <Status />
      <Squares
        squares={squares}
        winnerInfo={winnerInfo}
        onPlay={handlePlay}
      />
    </div>
  );
}

export default Board;
