<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index(){
        return Inertia::render('about', [
            'company' => 'Tuhu Shop',
            'year' => date('Y'),
        ]);
    }
}
