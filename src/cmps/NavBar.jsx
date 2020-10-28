import React from 'react'

import { NavLink, withRouter } from 'react-router-dom';

export function _NavBar() {

    return (
        <nav className="nav-bar flex">
            <NavLink className="nav-item" to="/about">ABOUT</NavLink>
            <NavLink className="nav-item" to="/">HOME</NavLink>
        </nav>
    )
}

export const NavBar = withRouter(_NavBar)

