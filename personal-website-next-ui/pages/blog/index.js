import Head from "next/head";
import Link from "next/link";
import Container from "../../components/Container";
import Header from '../../components/Header';
import blogPosts from '../../posts/blog-posts';

export default function Blog() {
    return (
        <>
            <Container>
            <Head>
                <title>Alex Mackechnie - Blog</title>
                <meta name="description" content="Hello! I'm Alex. I'm a Software Engineer currently working in Glasgow, Scotland. I blog about topics I find interesting within the world of Computer Science." />
            </Head>
            <div>
                <Header title="blog" />
                <hr></hr>
                {
                    blogPosts.map((post) => {
                        var pushLink = "/blog/" + post.id;
                        return (
                            <Link href={pushLink} className="link" key={post.id}>
                                <a>
                                    <div>
                                        <h3 className="date-below">{post.title}</h3>
                                        <p className="date-no-margin">{post.date}</p>
                                        <p>{post.snippet}...</p>
                                    </div>
                                </a>
                            </Link>
                        );
                    })
                }
            </div>
            </Container>
        </>
    );
}