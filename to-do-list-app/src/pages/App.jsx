import { useEffect, useState } from 'react';
import pb from '../../api/pocketbase.js';
import Button from '../components/Button/Button';
import S from './App.module.css';
import StatusBar from '../components/StatusBar/StatusBar';
import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import getToday from '../utils/getToday';
import gsap from 'gsap';

function App() {
  const [isClosedModal, setIsActive] = useState(false);
  const [list, setList] = useState([]);
  const [activeStatus, setActiveStatus] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [statusData, setStatusData] = useState([
    { title: '모두', count: 0, status: 'all' },
    { title: '할일', count: 0, status: 'todo' },
    { title: '한일', count: 0, status: 'done' },
    { title: '보관', count: 0, status: 'save' },
  ]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#00050e';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [isDarkMode]);

  const updateList = async () => {
    const allList = await pb.collection('List').getFullList({
      sort: '+startTime',
    });

    const today = new Date();
    const todayDate = today.toISOString().split('T')[0];

    for (const item of allList) {
      const itemDate = new Date(item.created).toISOString().split('T')[0];
      if (itemDate !== todayDate) {
        try {
          await pb.collection('List').delete(item.id);
        } catch (error) {
          console.error(`항목 삭제 오류 (ID: ${item.id}):`, error);
        }
      }
    }

    const updatedList = await pb.collection('List').getFullList({
      sort: '+startTime',
    });

    const filteredList = updatedList.filter((item) => {
      if (activeStatus === 'done') {
        return item.checked;
      } else if (activeStatus === 'todo') {
        return !item.checked;
      } else if (activeStatus === 'save') {
        return item.saved;
      } else {
        return true;
      }
    });

    setList(filteredList);

    const allCount = updatedList.length;
    const todoCount = updatedList.filter((item) => !item.checked).length;
    const doneCount = updatedList.filter((item) => item.checked).length;
    const saveCount = updatedList.filter((item) => item.saved).length;

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

      if (activeStatus === 'todo' && newCheckedState) {
        setActiveStatus('all');
      } else if (activeStatus === 'done' && !newCheckedState) {
        setActiveStatus('all');
      }

      updateList();

      const filteredList = list.filter((item) => item.status === activeStatus);
      if (filteredList.length === 0) {
        setActiveStatus('all');
      }
    } catch (error) {
      console.error('데이터 업데이트 오류:', error);
    }
  };

  const handleSavedBox = async (id, newSavedState) => {
    try {
      await pb.collection('List').update(id, {
        saved: newSavedState,
        checked: newSavedState,
      });

      if (!newSavedState) {
        if (activeStatus === 'save') {
          setActiveStatus('all');
        } else if (activeStatus === 'done') {
          setActiveStatus('all');
        }
      }

      updateList();
    } catch (error) {
      console.error('데이터 업데이트 오류:', error);
    }
  };

  return (
    <div className={`${S.component} ${isDarkMode ? S.isDarkMode : ''}`}>
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
        isDarkMode={isDarkMode}
      />
      <CardList
        list={list}
        onChecked={handleCheckBox}
        onSavedChange={handleSavedBox}
        isDarkMode={isDarkMode}
      />
      <Modal
        isClosedModal={isClosedModal}
        onSave={handleSave}
        onClose={handleClose}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
