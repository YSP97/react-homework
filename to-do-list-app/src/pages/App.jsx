import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';
import Button from '../components/Button/Button';
import S from './App.module.css';
import StatusBar from '../components/StatusBar/StatusBar';
import CardList from '../components/CardList/CardList';
import Modal from '../components/Modal/Modal';
import getToday from '../utils/getToday';
import pb from '../../api/pocketbase.js';

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

  useEffect(() => {
    const fetchDataOnce = async () => {
      try {
        await fetchData(activeStatus, setList, setStatusData);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchDataOnce();
  }, [activeStatus]);

  const handleBtnClick = () => {
    setIsActive(!isClosedModal);
  };

  const handleSave = () => {
    setIsActive(false);
    fetchData(activeStatus, setList, setStatusData);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const today = getToday();

  const handleStatusClick = (status) => {
    setActiveStatus(status);
  };

  let blur = {};
  if (isClosedModal) {
    blur = {
      filter: 'blur(2px)',
    };
  }

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

      fetchData(activeStatus, setList, setStatusData);
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

      fetchData(activeStatus, setList, setStatusData);
    } catch (error) {
      console.error('데이터 업데이트 오류:', error);
    }
  };

  return (
    <div className={`${S.component} ${isDarkMode ? S.isDarkMode : ''}`}>
      <a href="/" aria-label="홈으로 이동" style={blur}>
        <h1></h1>
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
        blur={blur}
      />
    </div>
  );
}

export default App;
