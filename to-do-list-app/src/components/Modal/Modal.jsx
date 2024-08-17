import { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import S from './Modal.module.css';
import listData from './../../data/data';
import gsap from 'gsap';

function Modal({ isClosedModal, onSave, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isClosedModal) {
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

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const cancelBtnStyle = {
    background: '#E2EBFA',
    color: '#0760FB',
  };

  const isSvgHidden = true;

  return (
    <div
      className={`${S.component} ${isClosedModal ? S.isActive : ''}`}
      ref={modalRef}
    >
      <div className={S.modal}>
        {listData.map((item, index) => (
          <Dialog
            key={index}
            style={item.style}
            title={item.title}
            text={item.text}
            onChange={handleChange}
          />
        ))}
        <div className={S.buttons}>
          <Button onClick={onSave} btnText={'저장'} isSvgHidden={isSvgHidden} />
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
