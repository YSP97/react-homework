import S from './Status.module.css';
function Status({ count, title, isActive }) {
  return (
    <div className={S.component}>
      <a href="/" className={`${S.link} ${isActive ? S.isActive : ''}`}>
        <p>{title}</p>
        <div>{count}</div>
      </a>
    </div>
  );
}

export default Status;
