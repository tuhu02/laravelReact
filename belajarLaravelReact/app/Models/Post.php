<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    # Digunakan untuk MENENTUKAN field mana yang BOLEH diisi secara massal
    protected $fillable = ['title', 'content'];

    # Mengubah tipe data atribut model secara otomatis saat diakses, jadi nanti ketika di panggil di controller bisa di manipulasi sebagai objek datetime
    protected $casts = [
        'created_at' => 'datetime',
        'update_at' => 'datetime',
    ];

    
}
