import Card from '../Card/Card';
import S from './CardList.module.css';

function CardList({ list, onChecked }) {
  return (
    <div className={S.component}>
      {list.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          checked={item.checked}
          startTime={item.startTime}
          endTime={item.endTime}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}

export default CardList;
