import { createRoot } from 'react-dom/client';
import ProfileList from './components/ProfileList.jsx';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<ProfileList />);
} else {
  console.warn('문서에 "#root" 요소가 존재하지 않습니다.');
}
