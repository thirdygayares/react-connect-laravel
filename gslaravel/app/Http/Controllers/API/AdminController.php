<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Admin;

class AdminController extends Controller
{
    public function adminstore(Request $request){
        $admin = new Admin;
        $admin->lastname = $request->input('lastname');
        $admin->firstname = $request->input('firstname');
        $admin->gender = $request->input('gender');
        $admin->mobilenumber = $request->input('mobilenumber');
        $admin->email = $request->input('email');
        $admin->save();

        return response()->json([
            'status'=>200,
            'message'=>'Admin Added Succesfully',
        ]);     
    }

    public function admin(){
        $admin = Admin::all();
        return response()->json([
            'status'=>200,
            'admin'=> $admin,
        ]);
        
        }
}
