<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Registrar;


class RegistrarController extends Controller
{
    public function registrarstore(Request $request){
        $registrar = new Registrar;
        $registrar->lastname = $request->input('lastname');
        $registrar->firstname = $request->input('firstname');
        $registrar->gender = $request->input('gender');
        $registrar->mobilenumber = $request->input('mobilenumber');
        $registrar->email = $request->input('email');
        $registrar->save();

        return response()->json([
            'status'=>200,
            'message'=>'Registrar Added Succesfully',
        ]);     
    }


    public function registrar(){
    $registrar = Registrar::all();
    return response()->json([
        'status'=>200,
        'registrar'=> $registrar,
    ]);
    
    }




}
