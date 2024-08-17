import Button from '@/components/Button/Button';
import S from './App.module.css';
import StatusBar from '@/components/StatusBar/StatusBar';
import CardList from '@/components/CardList/CardList';
import Modal from '@/components/Modal/Modal';

function App() {
  return (
    <div className={S.component}>
      <a href="">
        <h1></h1>
      </a>
      <div className={S.h2Group}>
        <h2>우리, 오늘 뭐할까?</h2>
        <p>2024년 8월 15일 (목요일)</p>
      </div>
      <Button />
      <StatusBar />
      <CardList />
      <Modal />
    </div>
  );
}

export default App;
