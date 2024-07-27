// @ts-nocheck
import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

function Profile({ name, imgURL, status = 'lock', size = 234 }): JSX.Element {
  let iconPath = '';
  let statusMessage = '';

  switch (status) {
    default:
    case 'lock':
      iconPath = '/lock.svg';
      statusMessage = '잠김';
      break;
    case 'online':
      iconPath = '/edit.svg';
      statusMessage = '편집';
      break;
  }

  const label = `${name} (${statusMessage})`;

  return (
    <figure className="Profile" aria-label={label} title={label}>
      <div className="img-group">
        <img src={`/profile_1.jpg`} alt={name} width={size} height={size} />
        <button type="button">
          <img src="./lock.svg" alt="" />
        </button>
      </div>
      <figcaption>슬비쌤</figcaption>
    </figure>
  );
}

const container = document.getElementById('root') as HTMLDivElement;

if (container) {
  createRoot(container).render(<Profile />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
