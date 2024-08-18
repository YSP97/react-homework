import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import S from './App.module.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import CardList from '@/components/CardList/CardList';
import Modal from '@/components/Modal/Modal';
import getToday from '@/utils/getToday';
import pb from '/api/pocketbase';
import gsap from 'gsap';

function App() {
  const [isClosedModal, setIsActive] = useState(false);
  const [list, setList] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');
  const [statusData, setStatusData] = useState([
    { title: '모두', count: 0, status: 'all' },
    { title: '할일', count: 0, status: 'todo' },
    { title: '한일', count: 0, status: 'done' },
    { title: '보관', count: 0, status: 'save' },
  ]);

  const updateList = async () => {
    const allList = await pb.collection('List').getFullList({
      sort: '+startTime',
    });

    const filteredList =
      activeStatus === 'done'
        ? allList.filter((item) => item.checked)
        : activeStatus === 'todo'
          ? allList.filter((item) => !item.checked)
          : activeStatus === 'save'
            ? allList.filter((item) => item.saved)
            : allList;

    setList(filteredList);

    const allCount = allList.length;
    const todoCount = allList.filter((item) => !item.checked).length;
    const doneCount = allList.filter((item) => item.checked).length;
    const saveCount = allList.filter((item) => item.saved).length;

    setStatusData([
      { title: '모두', count: allCount, status: 'all' },
      { title: '할일', count: todoCount, status: 'todo' },
      { title: '한일', count: doneCount, status: 'done' },
      { title: '보관', count: saveCount, status: 'save' },
    ]);
  };

  useEffect(() => {
    if (isClosedModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isClosedModal]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateList();
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [activeStatus]);

  const handleBtnClick = () => {
    setIsActive(!isClosedModal);
  };

  let blur = {};
  if (isClosedModal) {
    blur = {
      filter: 'blur(2px)',
    };
  }

  const handleSave = () => {
    setIsActive(false);
    updateList();
    console.log('저장');
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const today = getToday();

  const handleStatusClick = (status) => {
    setActiveStatus(status);
  };

  const handleCheckBox = async (id, newCheckedState) => {
    try {
      await pb.collection('List').update(id, {
        checked: newCheckedState,
      });
      await updateList();

      const filteredList = list.filter((item) => item.status === activeStatus);
      if (filteredList.length === 0) {
        setActiveStatus('all');
      }
    } catch (error) {
      console.error('업데이트 오류:', error);
    }
  };

  const handleSavedBox = async (id, newSavedState) => {
    try {
      await pb.collection('List').update(id, {
        saved: newSavedState,
        checked: newSavedState,
      });
      updateList();
    } catch (error) {
      console.error('업데이트 오류:', error);
    }
  };

  return (
    <div className={S.component}>
      <a href="">
        <h1 style={blur}></h1>
      </a>
      <div className={S.h2Group} style={blur}>
        <h2>우리, 오늘 뭐할까?</h2>
        <p>{today}</p>
      </div>
      <Button onClick={handleBtnClick} btnText={'생각났어?'} />
      <StatusBar
        data={statusData}
        onStatusClick={handleStatusClick}
        activeStatus={activeStatus}
      />
      <CardList
        list={list}
        onChecked={handleCheckBox}
        onSavedChange={handleSavedBox}
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
