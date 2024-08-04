import { buttonType } from '../@types/globals.d';

Button.propTypes = {
  button: buttonType,
};

export default function Button(button) {
  const { status, onClick } = button;
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
    <button
      type="button"
      className={`button ${status}`}
      onClick={onClick}
      aria-label={statusMessage}>
      {statusMessage}
    </button>
  );
}
