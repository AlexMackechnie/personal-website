import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function PostsPage({blogPosts, toggleSidebar}) {

    return (
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
    );
}

export default PostsPage;