<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\TeacherController;

Route::post('/enroll-students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'students']);

Route::post('/addteacher', [TeacherController::class, 'teacherstore']);
Route::get('/teacher', [TeacherController::class, 'teacher']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
