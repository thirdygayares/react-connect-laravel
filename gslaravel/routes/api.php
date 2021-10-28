<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\AdminController;


Route::post('/enroll-students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'students']);
Route::post('/adminregister', [AdminController::class, 'adminregister']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
