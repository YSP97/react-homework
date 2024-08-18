import S from './Dialog.module.css';
function Dialog({ onChange, title, text }) {
  return (
    <div className={S.component}>
      <h3>{title}</h3>
      {text ? (
        <textarea
          onChange={onChange}
          placeholder={text}
          className={S.textarea}
        />
      ) : (
        <div className={S.selectContainer}>
          <select onChange={onChange}>
            <option value="option1">오전</option>
            <option value="option2">오후</option>
          </select>
          <div className={S.timeInputContainer}>
            <input type="text" placeholder="08:00" className={S.timeInput} />
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
            <input type="text" placeholder="10:00" className={S.timeInput} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dialog;
