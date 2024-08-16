import { HistoryPropTypes } from '@/types/types.d';
import S from '../styles/components/History.module.css';

History.propTypes = HistoryPropTypes;

function History({ gameIndex, gameHistory = [], onTimeTravel }) {
  const handleClick = (index) => () => onTimeTravel(index);
  return (
    <div className={S.component}>
      <ol>
        {/* [[null, null, null,...],[null, '🐻, null,...],[null,🐻,🦁,...] */}
        {gameHistory.map((history, index) => {
          const buttonLabel =
            index === 0 ? '게임 시작' : `게임 ${index}로 돌아가기`;
          const isDisabled = gameIndex === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={handleClick(index)}
                disabled={isDisabled}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default History;
