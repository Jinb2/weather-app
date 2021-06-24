import React from 'react';
import '../styling/Navbar.css';


const Navbar = () => {
    return (
    <nav className="navbar">
        <ul>
            <li>
                Home
            </li>
            <li>
            Weather for Week
            </li>
            <li>
            Weathermaps
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;