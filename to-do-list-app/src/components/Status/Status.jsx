import S from './Status.module.css';
import { StatusPropTypes } from '/types/type.d';

Status.propTypes = StatusPropTypes;

function Status({
  count,
  title,
  onClick,
  status,
  isActive,
  disabled,
  isDarkMode,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(status);
  };

  return (
    <div
      className={`${S.component} ${disabled ? S.disabled : ''} ${isDarkMode ? S.isDarkMode : ''}`}
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
