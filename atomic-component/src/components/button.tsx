// @ts-nocheck
import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

function button({ status = 'edit', size = 234 }): JSX.Element {
  let iconPath = '';
  let statusMessage = '';

  switch (status) {
    default:
    case 'edit':
      statusMessage = '프로필 편집';
      break;
    case 'confirm':
      iconPath = '/edit.svg';
      statusMessage = '완료';
      break;
  }

  return <button>
    {statusMessage}
    </button>;
}
