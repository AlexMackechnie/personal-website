import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Store } from './../App';

function Header({title}) {
    const store = useContext(Store);

    return (
        <div className="header-container">
            <div className="title-container">
                <h1>{title}</h1>
            </div>
            <div className="navbar-container">
                <Link to="/blog"><div className="navbar-item">blog</div></Link>
                <div className="navbar-separator">•</div>
                <Link to="/"><div className="navbar-item">home</div></Link>
            </div>
            <div className="mobile-menu-container">
                <button id="menu-icon" onClick={() => !store.sidebarOpen ? store.setSidebarOpen(true) : store.setSidebarOpen(false)} >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </div>
    );
}

export default Header;