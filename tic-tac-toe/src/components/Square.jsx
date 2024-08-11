import { func, node, object } from 'prop-types';
import S from '../styles/components/Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
  style: object,
};

function Square({ children, onPlay, style }) {
  return (
    <button onClick={onPlay} className={S.component} style={style}>
      {children}
    </button>
  );
}

export default Square;
