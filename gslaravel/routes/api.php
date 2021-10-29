<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\TeacherController;
use App\Http\Controllers\API\RegistrarController;
use App\Http\Controllers\API\GuardianController;


Route::post('/enroll-students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'students']);

Route::post('/addteacher', [TeacherController::class, 'teacherstore']);
Route::get('/teacher', [TeacherController::class, 'teacher']);


Route::post('/addregistrar', [RegistrarController::class, 'registrarstore']);
Route::get('/registrar', [RegistrarController::class, 'registrar']);

Route::post('/addguardian', [GuardianController::class, 'guardianstore']);
Route::get('/guardian', [GuardianController::class, 'guardian']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
