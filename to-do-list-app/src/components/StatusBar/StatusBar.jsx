import Status from '../Status/Status';
import S from './StatusBar.module.css';

function StatusBar({ data, onStatusClick, status, list }) {
  return (
    <div className={S.component}>
      {data.map((item, index) => {
        return (
          <>
            <Status
              key={index}
              title={item.title}
              count={item.count}
              status={item.status}
              isActive={status === item.status}
              onClick={onStatusClick}
            />
            {index === 0 ? <p>|</p> : ''}
          </>
        );
      })}
    </div>
  );
}

export default StatusBar;
