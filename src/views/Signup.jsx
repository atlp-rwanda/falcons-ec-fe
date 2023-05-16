/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import spinner from '../assets/spinner.svg';
import Input from '../components/Input';
import shop from '../assets/Icons/shop.svg';
import { useRegisterUserMutation } from '../redux/slices/users/user';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastname, setLastname] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const body = {
    firstname,
    lastname,
    email,
    password,
  };

  const [createUser, { isLoading, error }] = useRegisterUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstnameError('');
    setLastnameError('');
    setEmailError('');
    setPasswordError('');

    if (firstname === '') {
      setFirstnameError('First name is required.');
      return;
    }
    if (firstname.length < 3) {
      setFirstnameError('First name must be at least 3 characters');
      return;
    }
    if (lastname === '') {
      setLastnameError('Last name is required.');
      return;
    }
    if (lastname.length < 3) {
      setLastnameError('Last name must be at least 3 characters');
      return;
    }

    if (email === '') {
      setEmailError('Email is required.');
      return;
    }

    if (password === '') {
      setPasswordError('Password is required.');
      return;
    }
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setPasswordError(
        'Password must be at least 8 characters long, include at least one uppercase letter, and at least one numeric digit.'
      );
      return;
    }
    createUser(body)
      .unwrap()
      .then(() => {
        toast.success('User created. Please verify your email.');
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      });
  };

  return (
    <div data-testid="signup" className="signup">
      <div className="shadow">
        <div className="circle1" />
        <div className="circle2" />
      </div>
      <div className="container">
        <div className="welcome-msg">
          <p className="msg-1">Sign Up</p>
          <div className="signin-link">
            <p className="msg-2">Already a user?</p>
            <a className="link" href="#">
              sign in!
            </a>
          </div>
        </div>
        <img className="shop-icon" src={shop} alt="shop-icon" />
        <div className="form-div">
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={firstnameError ? 'error' : ''}
            />
            {firstnameError && (
              <div className="error-message" style={{ color: 'red' }}>
                {firstnameError}
              </div>
            )}
            <Input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={lastnameError ? 'error' : ''}
            />
            {lastnameError && (
              <div className="error-message" style={{ color: 'red' }}>
                {lastnameError}
              </div>
            )}
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'error' : ''}
            />
            {emailError && (
              <div className="error-message" style={{ color: 'red' }}>
                {emailError}
              </div>
            )}
            <div className="password-input-container">
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? 'error' : ''}
              />
              {passwordError && (
                <div className="error-message" style={{ color: 'red' }}>
                  {passwordError}
                </div>
              )}
              <span
                className="password-icon"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  style={{ color: '#b8bcc2' }}
                />
              </span>
            </div>
            <button
              data-testid="signup-form"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <img src={spinner} style={{ height: '25px' }} alt="loader" />
              ) : (
                'Sign up'
              )}
            </button>
            {error && (
              <div className="error-message">Oops! {error.data.message}</div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
