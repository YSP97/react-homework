import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import S from './Modal.module.css';
import listData from './../../data/data';

function Modal({ isClosedModal, onSave, onClose }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const cancelBtnStyle = {
    background: '#E2EBFA',
    color: '#0760FB',
  };

  const isSvgHidden = true;

  return (
    <div className={`${S.component} ${isClosedModal ? S.isActive : ''}`}>
      <div className={S.modal}>
        {listData.map((item, index) => (
          <Dialog
            key={index}
            title={item.title}
            text={item.text}
            onChange={handleChange}
          />
        ))}
        <div className={S.buttons}>
          <Button onClick={onSave} btnText={'저장'} isSvgHidden={isSvgHidden} />
          <Button
            onClick={onClose}
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
