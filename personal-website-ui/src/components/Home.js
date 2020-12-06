import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Alex Mackechnie</title>
                <meta name="description" content="Hello! I'm Alex. I'm a Software Engineer currently working in Glasgow, Scotland. I blog about topics I find interesting within the world of Computer Science." />
            </Helmet>
            <div className="home-container">
                <h1 className="name">alex mackechnie</h1>
                <hr></hr>
                <div className="menu-container">
                    <Link to="/blog"><div className="menu-item">Blog</div></Link>
                </div>
            </div>
        </>
    );
}

export default Home;