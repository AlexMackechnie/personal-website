import Header from '../../components/Header';
import Head from 'next/head';
import styles from '../../styles/Post.module.css';
import blogPosts from '../../posts/blog-posts';
import Container from '../../components/Container';
import Markdown from '../../components/Markdown';

export default function Post({post}) {
    return (
        <>
        <Container>
            <Head>
                <title>{post.seoTitle}</title>
                <meta name="description" content={post.seoDescription} />
                <meta name="author" content="Alex Mackechnie" />
                <meta property="og:title" content={post.seoOgTitle} />
                <meta property="og:type" content={post.seoOgType} />
                <meta property="og:description" content={post.seoOgDescription} />
                <meta property="og:image" content={post.seoOgImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.twitterTitle} />
                <meta name="twitter:description" content={post.twitterDescription} />
                <meta name="twitter:image" content={post.twitterImage} />
            </Head>
            <Header title="blog" />
            <hr></hr>
            <div className={styles.blogContainer} >
                <h2 className="date-below">{post.title}</h2>
                <p className="date-no-margin">{post.date}</p>
                <Markdown>{post.content}</Markdown>
            </div>
            </Container>
        </>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: blogPosts.map((post) => {
            return {
                params: {
                    id: post.id
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async ({params: {id}}) => {
    return {
        props: {
            post: blogPosts.find(post => post.id === id)
        }
    }
}