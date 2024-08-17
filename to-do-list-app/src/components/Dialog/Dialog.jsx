import S from './Dialog.module.css';
function Dialog() {
  return <div className={S.component}>
    <h3>오늘 뭐할래?</h3>
    <input type="text" placeholder='치맥 고?'/>
  </div>;
}

export default Dialog;
