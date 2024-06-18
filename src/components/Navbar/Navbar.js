import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar = () => {
    return (
        <nav className='navbar-main'>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link className='navbar-link' to='/'>Home</Link>
                </li>
                <li className='navbar-li'>
                    <DropdownButton  variant="light" id="dropdown-basic-button" title="Projects">
                        <Dropdown.Item ><Link className='navbar-link' to='/projects/hello_world'>Hello world</Link></Dropdown.Item>
                    </DropdownButton>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
