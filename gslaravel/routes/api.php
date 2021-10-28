<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\TeacherController;

Route::post('/enroll-students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'students']);

Route::get('/add-teacher', [StudentController::class, 'teacherStore']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
