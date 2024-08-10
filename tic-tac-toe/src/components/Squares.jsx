import Square from './Square';
import S from '../styles/components/Squares.module.css';
import { INITIAL_SQUARES, PLAYER } from './../constants';

function Squares() {
  return (
    <div className={S.component}>
      {INITIAL_SQUARES.map((square, index) => {
        return <Square key={index}>{square}</Square>;
      })}
    </div>
  );
}

export default Squares;
