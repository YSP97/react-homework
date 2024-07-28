export default function Button({ status, onClick }) {
  let statusMessage = '';

  switch (status) {
    case 'lock':
      statusMessage = '프로필 편집';
      break;
    case 'edit':
      statusMessage = '완료';
      break;
  }

  return (
    <button className={`button ${status}`} onClick={onClick}>
      {statusMessage}
    </button>
  );
}
