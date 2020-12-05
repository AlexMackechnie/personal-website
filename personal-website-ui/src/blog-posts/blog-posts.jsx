import post001 from './post-001';
import post002 from './post-002';
import post003 from './post-003';

let blogPosts = [
    {
        "id": "dijkstras-algorithm",
        "title": "Dijkstra's Algorithm",
        "date": "5th Dec 2020",
        "snippet": "While sitting in a café in 1956, Edsger Dijkstra considered the problem of finding the shortest path between two cities, namely Rotterdam and Groningen",
        "content": post003
    },
    {
        "id": "the-cascading-failure-problem",
        "title": "The Cascading Failure Problem",
        "date": "4th Oct 2020",
        "snippet": "Doug McIlroy is well renowned for being the innovator behind Unix pipelines, along with his work on a range of programming languages and Unix programs",
        "content": post002
    },
    {
        "id": "isolation-in-acid-transactions",
        "title": "Isolation in ACID Transactions",
        "date": "10th Sep 2020",
        "snippet": "In 1981, Jim Gray¹ published the paper, The Transaction Concept: Virtues and Limitations, in which he provides the following definition of a transaction",
        "content": post001
    }
];

export default blogPosts;