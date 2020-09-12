import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <h1 className="name">alex mackechnie</h1>
            <hr></hr>
            <div className="menu-container">
                <Link to="/blog"><div className="menu-item">Blog</div></Link>
            </div>
        </div>
    );
}

export default Home;