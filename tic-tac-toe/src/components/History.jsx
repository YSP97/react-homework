import S from '../styles/components/History.module.css';

function History() {
  return (
    <div className={S.component}>
      <ol>
        <li>
          <button type="button">게임시작</button>
        </li>
      </ol>
    </div>
  );
}

export default History;
