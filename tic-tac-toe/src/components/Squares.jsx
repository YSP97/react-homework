import Square from './Square';
import S from '../styles/components/Squares.module.css';

function Squares() {
  return (
    <div className={S.component}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Squares;
