<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HasilPerhitungan extends Model
{
    protected $table = 'hasil_perhitungans';
    protected $primaryKey = 'uuid';
    protected $keyType = 'string';
    public $incrementing = false;
    public $timestamps = true;
    protected $guarded = [];
}
