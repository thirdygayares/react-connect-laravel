<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registrar extends Model
{
    use HasFactory;
    protected $table = 'registrar';
    protected $fillable = [
        'lastname', 
        'firstname', 
        'gender',        
        'mobilenumber', 
        'email', 
    ];
}
