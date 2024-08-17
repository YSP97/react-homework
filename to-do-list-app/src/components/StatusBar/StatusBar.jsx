import React from 'react';
import Status from '../Status/Status';
import S from './StatusBar.module.css';

function StatusBar({ data, onStatusClick, activeStatus }) {
  return (
    <div className={S.component}>
      {data.map((item) => (
        <Status
          key={item.status}
          title={item.title}
          count={item.count}
          status={item.status}
          isActive={activeStatus === item.status}
          onClick={onStatusClick}
        />
      ))}
    </div>
  );
}

export default StatusBar;
