import S from './Dialog.module.css';

function Dialog({
  onChange,
  title,
  text,
  value,
  onStartTimeChange,
  onEndTimeChange,
  startTime,
  endTime,
  isDarkMode,
}) {
  return (
    <div className={`${S.component} ${isDarkMode ? S.isDarkMode : ''}`}>
      <h3>{title}</h3>
      {text ? (
        <textarea
          onChange={onChange}
          placeholder={text}
          value={value}
          className={S.textarea}
        />
      ) : (
        <div className={S.selectContainer}>
          <select onChange={onChange}>
            <option value="오전">오전</option>
            <option value="오후">오후</option>
          </select>
          <div className={S.timeInputContainer}>
            <input
              type="text"
              placeholder="08:00"
              className={S.timeInput}
              value={startTime}
              onChange={onStartTimeChange}
            />
            <span>
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H9" stroke="#979797" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="10:00"
              className={S.timeInput}
              value={endTime}
              onChange={onEndTimeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
