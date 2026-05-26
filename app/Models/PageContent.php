<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    protected $fillable = [
        'section',
        'key',
        'value',
        'file_path',
    ];
}
