import React from 'react';
import Status from '../Status/Status';
import S from './StatusBar.module.css';

function StatusBar({ data, onStatusClick, status }) {
  return (
    <div className={S.component}>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Status
              key={index}
              title={item.title}
              count={item.count}
              status={item.status}
              isActive={status === item.status}
              onClick={onStatusClick}
            />
            {item.status === 'all' ? <p>|</p> : ''}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default StatusBar;
