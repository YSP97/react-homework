import { useState } from 'react';
import Status from '../Status/Status';
import S from './StatusBar.module.css';
function StatusBar() {
  const data = [
    { title: '모두', count: 3 },
    { title: '한일', count: 1 },
    { title: '할일', count: 2 },
    { title: '보관', count: 1 },
  ];

  const [isActive, setIsActive] = useState(false);

  const handleStatusClick = () => {
    setIsActive(true);
    console.log(isActive);
  };

  return (
    <div className={S.component}>
      {data.map((item, index) => {
        return (
          <>
            <Status
              key={index}
              title={item.title}
              count={item.count}
              isActive={isActive}
              onClick={() => handleStatusClick(item.title)}
            />
            {index === 0 ? <p>|</p> : ''}
          </>
        );
      })}
    </div>
  );
}

export default StatusBar;
