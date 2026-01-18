import React from 'react';
import { Link, router } from '@inertiajs/react';

interface Post {
    id: number;
    title: string;
    content: string;
}

interface Props{
    posts: Post[];
}

export default function PostsPage({ posts }: Props) {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <a href="/posts/create" style={{ background: '#22bd17', borderRadius: '6px', padding: '5px', color: '#fff'}}>Tambah</a>
            </div>
            <table
                style={{
                    border: '1px solid #fff',
                    borderCollapse: 'collapse',
                }}
            >
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #fff'}}>ID</th>
                        <th style={{ border: '1px solid #fff'}}>Title</th>
                        <th style={{ border: '1px solid #fff'}}>Content</th>
                        <th style={{ border: '1px solid #fff'}}>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td style={{ border: '1px solid #fff', padding: '8px' }}>
                                {post.id}
                            </td>
                            <td style={{ border: '1px solid #fff', padding: '8px' }}>
                                {post.title}
                            </td>
                            <td style={{ border: '1px solid #fff', padding: '8px' }}>
                                {post.content}
                            </td>
                            <td style={{ padding: '8px'}}>
                                <button onClick={() => 
                                { 
                                    if (confirm('Are you sure you want to delete this post?')) {
                                        router.delete(`/posts/${post.id}`);
                                    }
                                }
                                } style={{ backgroundColor: '#df0000', padding: '5px', borderRadius: '6px', marginRight: '10px'  }}>
                                    delete
                                </button>
                                <button
                                    onClick={() => router.get(`/posts/${post.id}`)} style={{  backgroundColor: '#3fbd00', padding: '5px', borderRadius: '6px ' }}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}