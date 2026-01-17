import React from 'react';

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
        <>
            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <a href="" style={{ background: '#22bd17', borderRadius: '6px', padding: '2px'}}>Tambah</a>
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
                            <td style={{ padding: '8px' }}>
                                <a style={{ background: '#e70000', borderRadius: '6px', padding: '2px', marginRight: '10px'  }} href="">Hapus</a>
                                <a style={{ background: '#009fb0', borderRadius: '6px', padding: '2px' }} href="">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}