import { useContext } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { Store } from '../components/Container';

export default function Header({ title }) {
    const store = useContext(Store);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.titleContainer}>
                <h1>{title}</h1>
            </div>
            <div className={styles.navbarContainer}>
                <Link href="/blog"><a><div className={styles.navbarItem}>blog</div></a></Link>
                <div className={styles.navbarSeparator}>•</div>
                <Link href="/"><a><div className={styles.navbarItem}>home</div></a></Link>
            </div>
            <div className={styles.mobileMenuContainer}>
                <button id="menu-icon" onClick={() => !store.sidebarOpen ? store.setSidebarOpen(true) : store.setSidebarOpen(false)} >
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </button>
            </div>
        </div>
    );
}