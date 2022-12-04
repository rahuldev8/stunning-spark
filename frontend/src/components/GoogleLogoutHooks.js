import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '393886148584-8n05pmg0mm6ji9v68ll8k3t1kmi861sv.apps.googleusercontent.com';

function GoogleLogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default GoogleLogoutHooks;