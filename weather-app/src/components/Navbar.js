import React from 'react';
import '../styling/navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul>
            <li>
                Home
            </li>
            <li>
            Weather for week
            </li>
            <li>
            Weathermaps
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;