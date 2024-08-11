import S from '@/styles/components/Status.module.css';
import { statusPropTypes } from '@/types/types.d';

Status.propTypes = statusPropTypes;

function Status({ winner, isDraw = false, nextPlayer }) {
  let statusMessage = `다음 플레이어 : ${nextPlayer}`;
  if (winner) statusMessage = `승리자: ${winner}`;
  if (isDraw) statusMessage = 'Draw!! 비겼습니다.';

  return <h2 className={S.component}>{statusMessage}</h2>;
}

export default Status;
