import React from 'react';
import { useForm } from '@inertiajs/react';


interface PostsShowProps {
    posts: {
        id: number;
        title: string;
        content: string;
    };
}
export default function PostsShow( {posts} : PostsShowProps ) {

    const { data, setData, put } = useForm({
        title: posts.title,
        content: posts.content,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(`/posts/${posts.id}`);
    };

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="">Title</label> <br />
                <input type="text" value={data.title}  style={{width: '20%', border: '1px solid #ccc'}} onChange={e => setData('title', e.target.value)} /> <br />
                <label htmlFor="">Content</label> <br />
                <textarea value={data.content} style={{width: '50%', height: '200px', border: '1px solid #ccc'}} onChange={e => setData('content', e.target.value)}></textarea> <br />
                <input type="submit" style={{width: '10%', border: '1px solid #ccc', backgroundColor: '#4CAF50'}} />
            </form>
        </div>
    );
}