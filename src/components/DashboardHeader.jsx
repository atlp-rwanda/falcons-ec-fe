import React, { useEffect } from 'react'
import '../styles/dashboardHeader.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logo, notification } from '../assets'
import user from '../assets/user.jpg'
import { getUser } from '../redux/slices/profile/updateProfile'

const DashboardHeader = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getUser())
  }, [dispatch])
  // const {profile} = useSelector(state=> state.profile)
  return (
    <div className='dashboard-header'>
      <img src={Logo} alt='falcons' className='logo-dashboard'/>
     <span>dashboard</span>
     <div className='dashboard-avatar'>
            <div className='notification'>
          <img src={notification} alt='notification' />
            </div>
          <Link to='/profile'>
          <img src={user} alt='notification' className='user-profile' />
          </Link>
          </div>
      {/* {profile.data ? ( 
        <div className='dashboard-avatar'>
          <img src={notification} alt='notification' />
          <Link to='/profile'>
        <img src={profile.data.avatar} alt='notification' className='user-profile' /> 
         </Link>
        </div>  ):(
          <div className='dashboard-avatar'>
            <div className='notification'>
          <img src={notification} alt='notification' />
            </div>
          <Link to='/profile'>
          <img src={user} alt='notification' className='user-profile' />
          </Link>
          </div>
      )} */}
      </div>
  )
}

export default DashboardHeader