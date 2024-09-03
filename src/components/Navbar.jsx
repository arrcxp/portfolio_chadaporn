import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const pages__name = [
        { path: '', name: 'Home' },
        { path: 'about', name: 'About' },
        { path: 'project', name: 'Project' },
        { path: 'contact', name: 'Contact' }
    ];

    return (
        <ul className='navbar__ul'>
            {pages__name.map((page, index) => (
                <li key={index} className='navbar__li'>
                    <NavLink to={`/${page.path}`}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >{page.name}</NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Navbar
