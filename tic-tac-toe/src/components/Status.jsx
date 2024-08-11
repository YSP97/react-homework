import S from '@/styles/components/Status.module.css';
import { OneOfPlayerType } from '@/types/types.d';
import { bool } from 'prop-types';

Status.propTypes = {
  winner: OneOfPlayerType,
  isDraw: bool,
  nextPlayer: OneOfPlayerType.isRequired,
};

function Status({ winner, isDraw = false, nextPlayer }) {
  if (winner) {
    return <h2 className={S.component}>승자는 {winner}!!</h2>;
  }

  if (isDraw) {
    return <h2 className={S.component}>비겼네용 한 판 더 하시겠어요??</h2>;
  }
  return <h2 className={S.component}>다음 플레이어: {nextPlayer}</h2>;
}

export default Status;
