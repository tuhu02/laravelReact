import React from 'react';

interface Post {
    id: number;
    title: string;
    content: string;
}

interface Props{
    posts: Post[];
}

export default function PostsPage({ posts } : Props) {
    return (
        <div>
            {posts.map(post =>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}