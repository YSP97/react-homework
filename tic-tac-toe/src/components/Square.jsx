import { node } from 'prop-types';
import S from '../styles/components/Square.module.css';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  return <button className={S.component}>{children}</button>;
}

export default Square;
