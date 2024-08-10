import { func, node } from 'prop-types';
import S from '../styles/components/Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
};

function Square({ children, onPlay }) {
  return (
    <button onClick={onPlay} className={S.component}>
      {children}
    </button>
  );
}

export default Square;
