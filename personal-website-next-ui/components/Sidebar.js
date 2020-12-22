import { useContext } from 'react';
import { Store } from '../components/Container';
import styles from '../styles/Sidebar.module.css';
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter();
    const store = useContext(Store);

    const navigate = (page) => {
        store.setSidebarOpen(false);
        router.push(page)
    }

    var sidebarWidth = "0px";
    if (store.sidebarOpen) {
      sidebarWidth = "80%";
    }

    return (
        <div className={styles.sidebar} style={{"width": sidebarWidth}} >
            <button className={styles.sidebarLink} onClick={() => navigate("/")}><h3 className={styles.sidebarHeading}>alex mackechnie</h3></button>
            <button className={styles.sidebarLink} onClick={() => navigate("/")}><div>home</div></button>
            <button className={styles.sidebarLink} onClick={() => navigate("/blog")}><div>blog</div></button>
        </div>
    );
}