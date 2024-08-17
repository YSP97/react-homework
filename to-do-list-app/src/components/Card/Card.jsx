import { useState } from 'react';
import S from './Card.module.css';

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
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isSaved, setIsSaved] = useState(saved);

  const handleCheckboxChange = (event) => {
    const newCheckedState = event.target.checked;
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
    <div className={`${S.component} ${isChecked ? S.checked : ''}`}>
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

      <hr />

      <div className={S.bottom}>
        <div className={S.time}>
          <span>오늘</span>
          <span
            className={S.now}
          >{`오후 ${startTime.slice(11, 16)} - ${endTime.slice(11, 16)}`}</span>
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
