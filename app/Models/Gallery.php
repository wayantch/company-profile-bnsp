<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Gallery extends Model
{
    protected $fillable = [
        'title',
        'image_path',
        'category',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    public function getImagePathAttribute($value)
    {
        if (empty($value)) {
            return null;
        }

        $path = str_replace('\\\\', '/', $value);

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            $urlPath = parse_url($path, PHP_URL_PATH);

            return $urlPath ?: $path;
        }

        if (str_starts_with($path, '/storage/')) {
            return $path;
        }

        if (str_starts_with($path, 'storage/')) {
            return '/' . $path;
        }

        if (str_starts_with($path, 'public/')) {
            return Storage::url(str_replace('public/', '', $path));
        }

        return Storage::url(ltrim($path, '/'));
    }
}
