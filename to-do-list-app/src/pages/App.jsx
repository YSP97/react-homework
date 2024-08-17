import Button from '@/components/Button/Button';
import S from './App.module.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import CardList from '@/components/CardList/CardList';
import Modal from '@/components/Modal/Modal';
import getToday from '@/utils/getToday';
import { useEffect, useState } from 'react';
import pb from '/api/pocketbase';
let dataList = await pb.collection('List').getFullList();

function App() {
  const [isClosedModal, setIsActive] = useState(false);
  const [activeStatus, setActiveStatus] = useState('all');
  const [list, setList] = useState(dataList);
  const [statusData, setStatusData] = useState([
    { title: '모두', count: 0, status: 'all' },
    { title: '할일', count: 0, status: 'todo' },
    { title: '한일', count: 0, status: 'done' },
    { title: '보관', count: 0, status: 'save' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filteredList = list;

        if (activeStatus === 'done') {
          filteredList = list.filter((item) => item.checked === true);
        } else if (activeStatus === 'todo') {
          filteredList = list.filter((item) => item.checked === false);
        } else if (activeStatus === 'save') {
          filteredList = list.filter((item) => item.saved === true);
        } else {
          filteredList = dataList;
        }

        setList(filteredList);
        updateDataCounts(dataList);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [activeStatus]);

  const updateCheckedStatus = async (id, newCheckedState) => {
    try {
      await pb.collection('List').update(id, {
        checked: newCheckedState,
      });

      const updatedDataList = await pb.collection('List').getFullList();
      setList(updatedDataList);
      updateDataCounts(updatedDataList);
    } catch (error) {
      console.error('업데이트 오류:', error);
    }
  };

  const updateDataCounts = (dataList) => {
    const newData = [
      { title: '모두', count: dataList.length, status: 'all' },
      {
        title: '할일',
        count: dataList.filter((item) => !item.checked).length,
        status: 'todo',
      },
      {
        title: '한일',
        count: dataList.filter((item) => item.checked).length,
        status: 'done',
      },
      {
        title: '보관',
        count: dataList.filter((item) => item.saved).length,
        status: 'save',
      },
    ];
    setStatusData(newData);
  };

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

  const handleStatusClick = (status) => {
    setActiveStatus(status);
  };

  const handleCheckBox = async (id, newCheckedState) => {
    await updateCheckedStatus(id, newCheckedState);
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
        data={statusData}
        onStatusClick={handleStatusClick}
        status={activeStatus}
      />
      <CardList
        activeStatus={activeStatus}
        list={list}
        onChecked={handleCheckBox}
      />
      <Modal
        isClosedModal={isClosedModal}
        onSave={handleSave}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
