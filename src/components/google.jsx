import React from 'react';
import googleIcon from '../assets/Icons/Google.svg';

const GoogleLoginButton = () => {
  const url = import.meta.env.VITE_GOOGLE_SERVER_URL;
  return (
    <a href={`${url}/auth/google`} target="_blank" rel="noopener noreferrer">
      <img className="google-button-login" src={googleIcon} alt="Google Icon" />
    </a>
  );
};

export default GoogleLoginButton;
