<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\TeacherController;
use App\Http\Controllers\API\RegistrarController;
use App\Http\Controllers\API\GuardianController;
use App\Http\Controllers\API\AdminController;


Route::post('/enroll-students', [StudentController::class, 'store']);
Route::get('/students', [StudentController::class, 'students']);



Route::post('/addteacher', [TeacherController::class, 'teacherstore']);
Route::get('/teacher', [TeacherController::class, 'teacher']);


Route::post('/addregistrar', [RegistrarController::class, 'registrarstore']);
Route::get('/registrar', [RegistrarController::class, 'registrar']);


Route::get ('edit-registrar/{id}',[RegistrarController::class, 'editRegistrar']);
Route::put ('update-registrar/{id}',[RegistrarController::class, 'updateRegistrar']);



Route::post('/addguardian', [GuardianController::class, 'guardianstore']);
Route::get('/guardian', [GuardianController::class, 'guardian']);

Route::post('/addadmin', [AdminController::class, 'adminstore']);
Route::get('/admin', [AdminController::class, 'admin']);

Route::get('/edit-teacher/{id}', [TeacherController::class, 'editTeacher']);
Route::put ('update-teacher/{id}',[TeacherController::class, 'updateTeacher']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


