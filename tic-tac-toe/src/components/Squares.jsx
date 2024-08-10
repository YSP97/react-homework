import Square from './Square';
import S from '../styles/components/Squares.module.css';
import { INITIAL_SQUARES, PLAYER } from './../constants';
import { useState } from 'react';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  const handlePlay = (index) => () => {
    console.log(`게임 플레이! ${index}`);
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

  // 게임 순서 index
  const gameIndex = squares.filter(Boolean).length % Object.keys(PLAYER).length;

  // gameIndex에 따른 현재 플레이어(왔다리 갔다리..)
  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;
  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
