import React from 'react';
import Header from './Header';
import './Post.css';
import { Helmet } from "react-helmet";

function Post({children, toggleSidebar, seoTitle, seoDescription}) {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <Header title="blog" toggleSidebar={toggleSidebar} />
            <hr></hr>
            <div className="blog-container">
                {children}
            </div>
        </>
    );
}

export default Post;