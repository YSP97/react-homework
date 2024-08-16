import Status from '../Status/Status';
import S from './StatusBar.module.css';
function StatusBar() {
  return (
    <div className={S.component}>
      <Status />
      <p>|</p>
      <Status />
      <Status />
      <Status />
    </div>
  );
}

export default StatusBar;
