import React from 'react';
import Header from './Header';
import './Post.css';

function Post({children, toggleSidebar}) {
    return (
        <>
            <Header title="blog" toggleSidebar={toggleSidebar} />
            <hr></hr>
            <div className="blog-container">
                {children}
            </div>
        </>
    );
}

export default Post;