<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;

class TeacherController extends Controller
{
    public function teacherstore(Request $request){
        $teacher = new Teacher;
        $teacher->lastname = $request->input('lastname');
        $teacher->firstname = $request->input('firstname');
        $teacher->college = $request->input('college');
        $teacher->gender = $request->input('gender');
        $teacher->mobilenumber = $request->input('mobilenumber');
        $teacher->email = $request->input('email');
        $teacher->save();

        return response()->json([
            'status'=>200,
            'message'=>'Teacher Added Succesfully',
        ]);
    }

    public function teacher(){
        $teacher = Teacher::all();
        return response()->json([
            'status'=>200,
            'teacher'=> $teacher,
        ]);


    }
    public function editTeacher($id){
        $teacher = Teacher::find($id);
        return response()->json([
            'status'=> 200,
            'teacher'=> $teacher,
        ]);
    }
    public function updateTeacher(Request $request,$id){
        $teacher = Teacher::find($id);
        $teacher->lastname = $request->input('lastname');
        $teacher->firstname = $request->input('firstname');
        $teacher->college = $request->input('college');
        $teacher->gender = $request->input('gender');
        $teacher->mobilenumber = $request->input('mobilenumber');
        $teacher->email = $request->input('email');
        $teacher->update();

        return response()->json([
            'status'=>200,
            'message'=>'Teacher Updated Succesfully',
        ]);
    }
}
