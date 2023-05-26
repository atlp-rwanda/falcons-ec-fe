import React from 'react'
import { Outlet } from 'react-router'
import Sidebar  from '../Sidebar'
import '../../styles/dashboardLayout.css'
import BottomNavBar from '../BottomNavBar'
import DashboardHeader from '../DashboardHeader'


const DashboardLayout = () => {
  return (
    <div className='dashboard-layout' data-testid='layout-test-id'>
      <DashboardHeader />
        <Sidebar/>
        <main className='dashboard-layout'>
        <Outlet />
        </main>
        {/* <BottomNavBar /> */}
    </div>
  )
}

export default DashboardLayout