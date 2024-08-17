import Button from '@/components/Button/Button';
import S from './App.module.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import CardList from '@/components/CardList/CardList';
import Modal from '@/components/Modal/Modal';
import getToday from '@/utils/getToday';
import { useEffect, useState } from 'react';
import { data, dataList } from '@/data/getData';


function App() {
  const [isClosedModal, setIsActive] = useState(false);
  const [activeStatus, setActiveStatus] = useState('all');
  const [list, setList] = useState(dataList);

  useEffect(() => {
    const fetchData = async () => {
      let filteredData = dataList;

      if (activeStatus === 'done') {
        filteredData = dataList.filter((item) => item.checked === true);
      } else if (activeStatus === 'todo') {
        filteredData = dataList.filter((item) => item.checked === false);
      } else if (activeStatus === 'save') {
        filteredData = dataList.filter((item) => item.saved === true);
      }
      setList(filteredData);
    };
    fetchData();
  }, [activeStatus]);

  const handleBtnClick = () => {
    setIsActive(!isClosedModal);
  };

  const handleSave = () => {
    setIsActive(false);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  const today = getToday();

  const handleStatusClick = (activeStatus) => {
    setActiveStatus(activeStatus);

  };

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
      <StatusBar
        data={data}
        onStatusClick={handleStatusClick}
        status={activeStatus}
        list={list}
      />
      <CardList data={data} activeStatus={activeStatus} list={list} />
      <Modal
        isClosedModal={isClosedModal}
        onSave={handleSave}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
