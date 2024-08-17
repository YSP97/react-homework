import Button from '@/components/Button/Button';
import S from './App.module.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import CardList from '@/components/CardList/CardList';
import Modal from '@/components/Modal/Modal';
import getToday from '@/utils/getToday';
import { useState } from 'react';

function App() {
  const [isClosedModal, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleBtnClick = () => {
    console.log('안녕');
    setIsActive(!isClosedModal);
  };

  const handleSave = () => {
    console.log('저장된 값:', inputValue);
    setIsActive(false);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  const today = getToday();
  return (
    <div className={S.component}>
      <a href="">
        <h1></h1>
      </a>
      <div className={S.h2Group}>
        <h2>우리, 오늘 뭐할까?</h2>
        <p>{today}</p>
      </div>
      <Button onClick={handleBtnClick} btnText={'생각났어?'} />
      <StatusBar />
      <CardList />
      <Modal
        isClosedModal={isClosedModal}
        onSave={handleSave}
        onClose={handleClose}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
