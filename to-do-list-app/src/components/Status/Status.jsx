import S from './Status.module.css';

function Status({ count, title, onClick, status, isActive, disabled }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(status);
  };

  return (
    <div
      className={`${S.component} ${disabled ? S.disabled : ''}`}
      onClick={handleClick}
    >
      <a href="#" className={`${S.link} ${isActive ? S.isActive : ''}`}>
        <p>{title}</p>
        <div>{count}</div>
      </a>
    </div>
  );
}

export default Status;
