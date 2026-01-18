<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $post = Post::all();

        return Inertia::render('posts/index', [
            'posts' => $post,
        ]);
    }

    public function create(){
        return Inertia::render('posts/create');
    }

    public function store(Request $request){
        Post::create($request->only('title', 'content'));

        return redirect()->route('posts.index');
    }

    public function destroy(Post $post){
        $post->delete();

        return redirect()->route('posts.index');
    }

    public function show(Post $post){
        return Inertia::render('posts/show', [
            'posts' => $post,
        ]);
    }

    public function update(Request $request, Post $post){
        $post->update($request->only('title', 'content'));

        return redirect()->route('posts.index');
    }
}