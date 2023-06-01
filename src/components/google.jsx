import React, { useEffect, useRef } from 'react';
import googleIcon from '../assets/Icons/Google.svg';

const {VITE_GOOGLE_SERVER_URL} = process.env

const GoogleLoginButton = () => {
  const url = VITE_GOOGLE_SERVER_URL;
  const formRef = useRef();
  
    const handleLogin = (event) => {
    event.preventDefault();
    formRef.current.submit();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const response = urlParams.get('response');
    if (response) {
      const { token } = JSON.parse(response);
      if (token) {
        localStorage.setItem('token', token);
        window.location.href = '/';
      }
    }
  }, []);

  return (
    <div>
      <form
        ref={formRef}
        action={`${url}/auth/google`}
        method="GET"
        style={{ display: 'none' }}
      ></form>
      <a className="google-button-login"
        href="#"
        onClick={handleLogin}
      >
        <img src={googleIcon} alt="Google Icon" />
      </a>
    </div>
  );
};

export default GoogleLoginButton;
