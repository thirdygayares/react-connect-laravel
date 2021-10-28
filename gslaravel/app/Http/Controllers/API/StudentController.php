<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Students;


class StudentController extends Controller
{
    public function store(Request $request){
        $student = new Students;
        $student->lastname = $request->input('lastname');
        $student->firstname = $request->input('firstname');
        $student->college = $request->input('college');
        $student->course = $request->input('course');
        $student->section = $request->input('section');
        $student->mobilenumber = $request->input('mobilenumber');
        $student->email = $request->input('email');
        $student->save();

        return response()->json([
            'status'=>200,
            'message'=>'Students Added Succesfully',
        ]);
    }


    public function students(){
        $student =  Students::all();
        return response()->json([
            'status'=>200,
            'students'=> $student,
        ]);


    }
}
