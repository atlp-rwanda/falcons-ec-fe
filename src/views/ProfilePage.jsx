/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/slices/profile/updateProfile';
import '../styles/profile.css';
import Profile from '../components/profile/Profile';
import Spinner from '../components/Spinner';
import TopMenu from '../components/profile/TopMenu';


const GetProfile = () => {
    const dispatch = useDispatch();
    const {profile, isLoading, error} = useSelector((state) => state.profile)
  
    useEffect(() =>{
      dispatch(getUser())
    },[dispatch])
    return (
        <div data-testid='get-profile'>
          <TopMenu />
          {isLoading && (
          <Spinner />
        )}
        {!isLoading && error ? (
          <div>Something went wrong....</div>
        ) : null}
          {profile ? <Profile data={profile.data} /> : null}
          </div>
      );
}

export default GetProfile