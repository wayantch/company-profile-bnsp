<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'category_id',
        'thumbnail',
        'content',
        'author',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($article) {
            if (empty($article->slug)) {
                $article->slug = static::generateUniqueSlug($article->title);
            }
        });

        static::updating(function ($article) {
            if ($article->isDirty('title')) {
                $article->slug = static::generateUniqueSlug($article->title);
            }
        });
    }

    protected static function generateUniqueSlug($title)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (static::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    public function scopePublished($query)
    {
        return $query->where('is_published', true);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getThumbnailAttribute($value)
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
