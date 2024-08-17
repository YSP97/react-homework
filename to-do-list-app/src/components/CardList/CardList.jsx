import Card from '../Card/Card';
import S from './CardList.module.css';
function CardList() {
  return (
    <div className={S.component}>
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
