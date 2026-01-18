import { useForm } from '@inertiajs/react';
import React from 'react';

export default function PostsCreate() {
    const { data, setData, post } = useForm({
        title: '',
        content: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/posts');
    };

    return (
        <form onSubmit={submit}>
            <label style={{ color: '#fff' }}>Title</label>
            <input
                value={data.title}
                onChange={e => setData('title', e.target.value)}
            />

            <label style={{ color: '#fff' }}>Content</label>
            <input
                value={data.content}
                onChange={e => setData('content', e.target.value)}
            />

            <button type="submit">Simpan</button>
        </form>
    );
}
