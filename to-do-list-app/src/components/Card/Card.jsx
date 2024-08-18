import { useState } from 'react';
import S from './Card.module.css';
import { convertMinutesToTime } from '@/utils/getTimeNumber';

function Card({
  id,
  title,
  text,
  startTime,
  endTime,
  checked,
  saved,
  onChecked,
  onSavedChange,
  daynight,
  isDarkMode,
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isSaved, setIsSaved] = useState(saved);

  const handleCheckboxChange = (event) => {
    const newCheckedState = event.target.checked;

    if (isSaved && !newCheckedState) {
      setIsSaved(false);
      onSavedChange(id, false);
    }

    setIsChecked(newCheckedState);
    onChecked(id, newCheckedState);
  };

  const handleBottomCheckboxChange = (event) => {
    const newSavedState = event.target.checked;
    setIsSaved(newSavedState);
    setIsChecked(newSavedState);
    onSavedChange(id, newSavedState);
  };

  return (
    <div
      className={`${S.component} ${isChecked ? S.checked : ''} ${isDarkMode ? S.isDarkMode : ''}`}
    >
      <div className={S.card}>
        <div className={S.text}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className={S.input}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      <hr className={S.hr} />

      <div className={S.bottom}>
        <div className={S.time}>
          <span>오늘</span>
          <span
            className={S.now}
          >{`${daynight} ${convertMinutesToTime(startTime)} - ${convertMinutesToTime(endTime)}`}</span>
        </div>
        <div className={S.input}>
          <input
            type="checkbox"
            checked={isSaved}
            onChange={handleBottomCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
