import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/Container';
import styles from '../styles/Home.module.css';

export default function Home({ sidebarOpen }) {
  return (
    <>
    <Head>
        <html lang="en" />
        <title>Alex Mackechnie</title>
        <meta name="description" content="Hello! I'm Alex. I'm a Software Engineer currently working in Glasgow, Scotland. I blog about topics I find interesting within the world of Computer Science." />
    </Head>
    <Container>
    <div>
        <h1 className={styles.name}>alex mackechnie</h1>
        <hr></hr>
        <div className={styles.menuContainer} >
            <Link href="/blog"><a><div className={styles.menuItem}>Blog</div></a></Link>
        </div>
    </div>
    </Container>
  </>
  );
}
