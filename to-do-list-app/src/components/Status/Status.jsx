import S from './Status.module.css';

function Status({ count, title, onClick, status, isActive }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(status);
  };

  return (
    <div className={S.component} onClick={handleClick}>
      <a href="#" className={`${S.link} ${isActive ? S.isActive : ''}`}>
        <p>{title}</p>
        <div>{count}</div>
      </a>
    </div>
  );
}

export default Status;
