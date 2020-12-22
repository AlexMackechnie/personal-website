import { useState, createContext } from 'react';
import styles from '../styles/Container.module.css';
import Sidebar from './Sidebar';
import OutsideClickHandler from 'react-outside-click-handler';

export const Store = createContext(null);

export default function Container({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const store = { sidebarOpen, setSidebarOpen };

    return (
        <Store.Provider value={store}>
            <OutsideClickHandler onOutsideClick={(e) => e.srcElement.id !== "menu-icon" ? setSidebarOpen(false) : null}>
                <Sidebar />
            </OutsideClickHandler>

            <div className={styles.appContainer}>
                <div className={styles.columnContainer}>
                    {children}
                </div>
            </div>
        </Store.Provider>
    );
}