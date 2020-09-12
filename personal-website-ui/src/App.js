import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PostsPage from './components/PostsPage';
import Post from './components/Post';
import ReactMarkdown from 'react-markdown';
import blogPosts from './blog-posts/blog-posts';
import OutsideClickHandler from 'react-outside-click-handler';
import Sidebar from './components/Sidebar';

export const Store = createContext(null);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const store = { sidebarOpen, setSidebarOpen };

  return (
    <Router>
      <Store.Provider value={store}>

        <OutsideClickHandler onOutsideClick={(e) => e.srcElement.id !== "menu-icon" ? setSidebarOpen(false) : null}>
          <Sidebar />
        </OutsideClickHandler>

        <div className="app-container">
          <div className="column-container">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/blog"><PostsPage blogPosts={blogPosts} /></Route>
            {blogPosts.map((post) => {
              var pushLink = "/blog/" + post.id;
              return (<Route exact path={pushLink} key={post.id}>
                <Post> 
                  <h2 className="date-below">{post.title}</h2>
                  <p className="date-no-margin">{post.date}</p>
                  <ReactMarkdown source={post.content} />
                </Post>
              </Route>);
            })}
          </Switch>
          </div>
        </div>

      </Store.Provider>
    </Router>
  );
}

export default App;
