import post001 from './post-001';
import post002 from './post-002';
import post003 from './post-003';
import post004 from './post-004';

let blogPosts = [
    {
        "id": "dynamic-programming",
        "title": "Dynamic Programming: Top-Down vs Bottom-Up",
        "date": "31st Jan 2021",
        "snippet": "Dynamic Programming is a method used to solve problems by breaking the main problem up into subproblems, storing and reusing the results, and combining the solutions",
        "content": post004,
        "seoTitle": "Dynamic Programming: Top-Down vs Bottom-Up",
        "seoDescription": "Dynamic Programming is a fascinating algorithmic technique that can be used to achieve huge performance optimisations. This blog post explores the two implementations of this technique: Recursive Top-Down with Memoization and Iterative Bottom Up.",
        "seoOgTitle": "Dynamic Programming: Top-Down vs Bottom-Up",
        "seoOgType": "article",
        "seoOgDescription": "Dynamic Programming is a fascinating algorithmic technique that can be used to achieve huge performance optimisations. This blog post explores the two implementations of this technique: Recursive Top-Down with Memoization and Iterative Bottom Up.",
        "seoOgImage": "https://alexjmac.com/memo-example.png",
        "twitterTitle": "Dynamic Programming: Top-Down vs Bottom-Up",
        "twitterDescription": "Dynamic Programming is a fascinating algorithmic technique that can be used to achieve huge performance optimisations. This blog post explores the two implementations of this technique: Recursive Top-Down with Memoization and Iterative Bottom Up.",
        "twitterImage": "https://alexjmac.com/memo-example.png",
    },
    {
        "id": "dijkstras-algorithm",
        "title": "Dijkstra's Algorithm",
        "date": "5th Dec 2020",
        "snippet": "While sitting in a café in 1956, Edsger Dijkstra considered the problem of finding the shortest path between two cities, namely Rotterdam and Groningen",
        "content": post003,
        "seoTitle": "Dijkstra's Algorithm",
        "seoDescription": "This blog post explores the history and workings of Edsger W. Dijkstra's famous path finding algorithm, first developed in 1956.",
        "seoOgTitle": "Dijkstra's Algorithm",
        "seoOgType": "article",
        "seoOgDescription": "This blog post explores the history and workings of Edsger W. Dijkstra's famous path finding algorithm, first developed in 1956.",
        "seoOgImage": "https://alexjmac.com/relaxation-example.png",
        "twitterTitle": "Dijkstra's Algorithm",
        "twitterDescription": "This blog post explores the history and workings of Edsger W. Dijkstra's famous path finding algorithm, first developed in 1956.",
        "twitterImage": "https://alexjmac.com/relaxation-example.png",
    },
    {
        "id": "the-cascading-failure-problem",
        "title": "The Cascading Failure Problem",
        "date": "4th Oct 2020",
        "snippet": "Doug McIlroy is well renowned for being the innovator behind Unix pipelines, along with his work on a range of programming languages and Unix programs",
        "content": post002,
        "seoTitle": "The Cascading Failure Problem",
        "seoDescription": "This blog post explores the cascading failure problem in the world of microservices, and investigates the techniques that can be used to mitigate this.",
        "seoOgTitle": "The Cascading Failure Problem",
        "seoOgType": "article",
        "seoOgDescription": "This blog post explores the cascading failure problem in the world of microservices, and investigates the techniques that can be used to mitigate this.",
        "seoOgImage": "https://alexjmac.com/circuit-breaker-example.png",
        "twitterTitle": "The Cascading Failure Problem",
        "twitterDescription": "This blog post explores the cascading failure problem in the world of microservices, and investigates the techniques that can be used to mitigate this.",
        "twitterImage": "https://alexjmac.com/circuit-breaker-example.png"
    },
    {
        "id": "isolation-in-acid-transactions",
        "title": "Isolation in ACID Transactions",
        "date": "10th Sep 2020",
        "snippet": "In 1981, Jim Gray¹ published the paper, The Transaction Concept: Virtues and Limitations, in which he provides the following definition of a transaction",
        "content": post001,
        "seoTitle": "Isolation in ACID Transactions",
        "seoDescription": "This blog post explores the concept of isolation within database transactions, and explains the different levels of isolation available.",
        "seoOgTitle": "Isolation in ACID Transactions",
        "seoOgType": "article",
        "seoOgDescription": "This blog post explores the concept of isolation within database transactions, and explains the different levels of isolation available.",
        "seoOgImage": "https://alexjmac.com/transaction-example.png",
        "twitterOgTitle": "Isolation in ACID Transactions",
        "twitterOgDescription": "This blog post explores the concept of isolation within database transactions, and explains the different levels of isolation available.",
        "twitterOgImage": "https://alexjmac.com/transaction-example.png"
    }
];

export default blogPosts;