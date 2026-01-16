<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $post = Post::all();

        return Inertia::render( 'post', [
            'posts' => $post,
        ]);
    }
}
