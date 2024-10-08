import Card from '../Card/Card';
import S from './CardList.module.css';
import { CardListPropTypes } from '../../types/type.d';

CardList.propTypes = CardListPropTypes;

function CardList({ list, onChecked, onSavedChange, isDarkMode }) {
  return (
    <div className={S.component}>
      {list.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          checked={item.checked}
          saved={item.saved}
          daynight={item.daynight}
          startTime={item.startTime}
          endTime={item.endTime}
          onChecked={onChecked}
          onSavedChange={onSavedChange}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

export default CardList;
