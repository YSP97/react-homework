import { useState } from 'react';
import Profile from './Profile.jsx';
import Button from './Button.jsx';
import profilesData from '/src/data/DataList.js';

function ProfileList() {
  const [profiles, setProfiles] = useState(profilesData);
  const [buttonStatus, setButton] = useState('lock');

  const handleButtonClick = () => {
    const newStatus = buttonStatus === 'lock' ? 'edit' : 'lock';
    setProfiles((profiles) =>
      profiles.map((profile) => ({
        ...profile,
        status: newStatus,
      }))
    );
    setButton(newStatus);
  };

  let title = '';
  switch (buttonStatus) {
    case 'lock':
      title = '프로필 선택';
      break;
    case 'edit':
      title = '프로필 편집';
      break;
  }

  return (
    <section className="list-group">
      <h2>{title}</h2>
      <ul className="ProfileList">
        {profiles.map((profile, index) => (
          <li key={index}>
            <Profile
              name={profile.name}
              imgURL={profile.imgURL}
              status={profile.status}
            />
          </li>
        ))}
      </ul>
      <Button status={buttonStatus} onClick={handleButtonClick} />
    </section>
  );
}

export default ProfileList;
