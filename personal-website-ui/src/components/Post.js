import React from 'react';
import Header from './Header';
import './Post.css';
import { Helmet } from "react-helmet";

function Post({children, toggleSidebar, seoTitle, seoDescription, seoOgTitle, seoOgType, seoOgDescription, seoOgImage}) {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta name="author" content="Alex Mackechnie" />
                <meta property="og:title" content={seoOgTitle} />
                <meta property="og:type" content={seoOgType} />
                <meta property="og:description" content={seoOgDescription} />
                <meta property="og:image" content={seoOgImage} />
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