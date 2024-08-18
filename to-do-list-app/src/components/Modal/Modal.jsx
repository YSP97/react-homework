import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import S from './Modal.module.css';
import listData from './../../data/data';
import gsap from 'gsap';
import pb from '../../../api/pocketbase';
import { convertTimeToMinutes } from '@/utils/getTimeNumber';
import { ModalPropTypes } from '/types/type.d';

Modal.propTypes = ModalPropTypes;

function Modal({ isClosedModal, onSave, onClose, isDarkMode }) {
  const modalRef = useRef(null);
  const [titleValue, setTitleValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [dayNight, setDayNight] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (isClosedModal) {
      setTitleValue('');
      setTextValue('');
      setStartTime('');
      setEndTime('');
      gsap.fromTo(
        modalRef.current,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isClosedModal]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: 300,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: onClose,
    });
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleDayNightChange = (e) => {
    setDayNight(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSave = async () => {
    try {
      await pb.collection('List').create({
        title: titleValue,
        text: textValue,
        daynight: dayNight,
        startTime: convertTimeToMinutes(startTime),
        endTime: convertTimeToMinutes(endTime),
      });
      onSave();
    } catch (error) {
      console.error('데이터 저장 오류:', error);
    }
  };

  const cancelBtnStyle = {
    background: '#E2EBFA',
    color: '#0760FB',
  };

  const isSvgHidden = true;

  return (
    <div
      className={`${S.component} ${isClosedModal ? S.isActive : ''} ${isDarkMode ? S.isDarkMode : ''}`}
      ref={modalRef}
    >
      <div className={S.modal}>
        {listData.map((item, index) => (
          <Dialog
            key={index}
            style={item.style}
            title={item.title}
            value={index === 0 ? titleValue : textValue}
            text={item.text}
            onChange={
              index === 0
                ? handleTitleChange
                : index === 1
                  ? handleTextChange
                  : handleDayNightChange
            }
            onStartTimeChange={handleStartTimeChange}
            onEndTimeChange={handleEndTimeChange}
            startTime={startTime}
            endTime={endTime}
            isDarkMode={isDarkMode}
          />
        ))}
        <div className={S.buttons}>
          <Button
            onClick={handleSave}
            btnText={'저장'}
            isSvgHidden={isSvgHidden}
          />
          <Button
            onClick={handleClose}
            style={cancelBtnStyle}
            btnText={'취소'}
            isSvgHidden={isSvgHidden}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
