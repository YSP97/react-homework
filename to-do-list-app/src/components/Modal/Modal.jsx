import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import S from './Modal.module.css';
function Modal() {
  return (
    <div className={S.component}>
      <div className={S.modal}>
        <Dialog />
        <Dialog />
        <Dialog />
        <div className={S.buttons}>
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Modal;
