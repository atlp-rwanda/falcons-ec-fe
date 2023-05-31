/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import '../styles/dashboardHeader.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logo, notification } from '../assets'
import user from '../assets/user.jpg'
import { getUser } from '../redux/slices/profile/updateProfile'

const DashboardHeader = ({text,className}) => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getUser())
  }, [dispatch])
  return (
    <div className='dashboard-header'>
      <img src={Logo} alt='falcons' className='logo-dashboard'/>
     <p className={className}>{text}</p>
     <div className='dashboard-avatar'>
            <div className='notification'>
            <img src={notification} alt='notification' />
            <span>0</span>
            </div>
          <Link to='/profile'>
          <img src={user} alt='notification' className='user-profile' />
          </Link>
          </div>
      </div>
  )
}

export default DashboardHeader