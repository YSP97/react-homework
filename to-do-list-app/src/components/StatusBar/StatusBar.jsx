import React from 'react';
import Status from '../Status/Status';
import S from './StatusBar.module.css';
import { StatusBarPropTypes } from '/types/type.d';

StatusBar.propTypes = StatusBarPropTypes;

function StatusBar({ data, onStatusClick, activeStatus, isDarkMode }) {
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
          disabled={item.count === 0}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}

export default StatusBar;
