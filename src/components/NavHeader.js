import React from 'react'
import {
    Link
} from 'react-router-dom'

import './NavHeader.css'

const NavHeader = () => {
   return (
    <div className="header sd">
            <div className="nav sd">
                <div className="nav-container">
                    <Link to="/" className="nav-header">Slobbo</Link>
                    <Link to="/posts" className="nav-item">Posts</Link>
                    <Link to="/posts" className="nav-item">Workshops</Link>
                    <Link to="/posts" className="nav-item">About</Link>
                </div>
            </div>
        </div>
   )
}

export default NavHeader