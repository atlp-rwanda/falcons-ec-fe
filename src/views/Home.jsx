import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div>This is the Home Page
        <div className="login">
            <Link to="login">Login</Link>
        </div>
    </div>

  )
}

export default Home