import S from './Status.module.css';
function Status() {
  return (
    <div className={S.component}>
      <a href="/" className={S.link}>
        <p>모두</p>
        <div>3</div>
      </a>
    </div>
  );
}

export default Status;
