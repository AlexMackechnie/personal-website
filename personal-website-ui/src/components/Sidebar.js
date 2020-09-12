import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Sidebar.css';
import { Store } from './../App';

function Sidebar() {
    const history = useHistory();
    const store = useContext(Store);

    const navigate = (page) => {
        store.setSidebarOpen(false);
        history.push(page)
    }

    var sidebarWidth = "0px";
    if (store.sidebarOpen) {
      sidebarWidth = "80%";
    }

    return (
        <div className="sidebar" style={{"width": sidebarWidth}} >
            <button className="sidebar-link" onClick={() => navigate("/")}><h3 className="sidebar-heading">alex mackechnie</h3></button>
            <button className="sidebar-link" onClick={() => navigate("/")}><div>home</div></button>
            <button className="sidebar-link" onClick={() => navigate("/blog")}><div>blog</div></button>
        </div>
    );
};

export default Sidebar;