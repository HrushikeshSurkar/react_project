import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='/'>Home</Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='projects/hello_world'>Hello world</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
