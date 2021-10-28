<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;

class TeacherController extends Controller
{
    public function teacherStore(Request $request){
        $teacher = new Teacher;
        $teacher->lastname = $request->input('lastname');
        $teacher->firstname = $request->input('firstname');
        $teacher->college = $request->input('college');
        $teacher->course = $request->input('teacher');
        $teacher->mobilenumber = $request->input('mobilenumber');
        $teacher->email = $request->input('email');
        $teacher->save();

        return response()->json([
            'status'=>200,
            'message'=>'Teacher Added Succesfully',
        ]);

    }
}
