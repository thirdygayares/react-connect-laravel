<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guardian;


class GuardianController extends Controller
{
    //
    public function guardianstore(Request $request){
        $guardian = new Guardian;
        $guardian->lastname = $request->input('lastname');
        $guardian->firstname = $request->input('firstname');
        $guardian->gender = $request->input('gender');
        $guardian->mobilenumber = $request->input('mobilenumber');
        $guardian->email = $request->input('email');
        $guardian->guardedby = $request->input('guardedby');
        $guardian->save();

        return response()->json([
            'status'=>200,
            'message'=>'Guardian Added Succesfully',
        ]);     
    }

}
