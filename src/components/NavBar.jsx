/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/navBar.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <label style={{marginLeft:'160px'}}>Where shopping is always a pleasure</label>
      <label style={{marginRight:'65px'}}>| John Doe</label>
    </div>
  )
}

export default NavBar