import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Game from '@/pages/Game';
import '@/styles/main.css';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Game />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#root" 요소가 존재하지 않습니다.');
}
