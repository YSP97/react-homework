import { profileType } from '../@types/globals.d';

Profile.propTypes = {
  profile: profileType,
};

export default function Profile(profile) {
  const { name, imgURL, status = 'lock', size = 234 } = profile;
  let iconPath = '';
  let statusMessage = '';

  switch (status) {
    default:
    case 'lock':
      iconPath = '/lock.svg';
      statusMessage = '잠김';
      break;
    case 'edit':
      iconPath = '/edit.svg';
      statusMessage = '편집';
      break;
  }

  const label = `${name} (${statusMessage})`;

  return (
    <figure className="Profile" aria-label={label} title={label}>
      <div className="img-group">
        <img src={`/${imgURL}`} alt={name} width={size} height={size} />
        <button type="button">
          <img src={iconPath} alt={status} />
        </button>
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
