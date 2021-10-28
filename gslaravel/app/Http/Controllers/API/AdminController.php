<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AdminController extends Controller
{
    public function adminregister(Request $request){
        
            $validator = Validator::make($request->all(), [
                'firstname' => 'required|max:191',
                'email' => 'required|email|max:191|unique:users,email',
                'contactnumber' => 'required|8',
            ]);
    
            if($validator->fails()){
                return response()->json([
                    'validation_errors' => $validator->messages(),
                ]);
                
            }else{
                $user = User::create([
                    'firstname' => $request->name,
                    'email' => $request->email,
                    'contactnumber'=>Hash::make($request->password)
                ]);
    
                $token = $user->createToken($user->email. '_Token')->plainTextToken;
    
                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>'Admin Registered Succesfully',
                ]);
    
            }
       
    
    }
}
