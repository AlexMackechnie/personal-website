import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Helmet } from "react-helmet";

function PostsPage({blogPosts, toggleSidebar}) {

    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Alex Mackechnie - Blog</title>
                <meta name="description" content="Hello! I'm Alex. I'm a Software Engineer currently working in Glasgow, Scotland. I blog about topics I find interesting within the world of Computer Science." />
            </Helmet>
        <div>
            <Header title="blog" toggleSidebar={toggleSidebar} />
            <hr></hr>
            {
                blogPosts.map((post) => {
                    var pushLink = "/blog/" + post.id;
                    return (
                        <Link to={pushLink} className="link" key={post.id}>
                            <div>
                                <h3 className="date-below">{post.title}</h3>
                                <p className="date-no-margin">{post.date}</p>
                                <p>{post.snippet}...</p>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
        </>
    );
}

export default PostsPage;