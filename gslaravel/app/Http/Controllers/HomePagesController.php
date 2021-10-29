<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomePagesController extends Controller
{
    public function home(){
        return view('pages.homepage.homepage');
    }

    public function students(){
        return view('pages.students.students');
    }
}
