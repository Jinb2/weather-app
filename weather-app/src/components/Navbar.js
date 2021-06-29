import React from 'react';
import '../styling/navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul>
            <li>
            <a href="https://www.youtube.com/watch?v=umS8wfT7M2I">Home</a>
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=umS8wfT7M2I">Weather for week</a>
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=umS8wfT7M2I">Weathermaps</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;