import React from 'react';
import '../styling/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul>
            <Link to="/">
            <li>
                Home
            </li>
            </Link>
            <Link to="/week">
            <li>
            Weather for week
            </li>
            </Link>
            <Link to="/weathermaps">
            <li>
            Weathermaps
            </li>
            </Link>
        </ul>
    </nav>
    )
}

export default Navbar;