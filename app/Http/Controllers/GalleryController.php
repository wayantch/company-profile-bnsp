<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::orderBy('order', 'asc')
            ->get()
            ->groupBy('category');

        return Inertia::render('Public/Gallery/Index', [
            'galleries' => $galleries,
        ]);
    }

    public function show(Gallery $gallery)
    {
        $relatedGalleries = Gallery::where('id', '!=', $gallery->id)
            ->orderBy('order', 'asc')
            ->take(6)
            ->get();

        return Inertia::render('Public/Gallery/Show', [
            'gallery' => $gallery,
            'relatedGalleries' => $relatedGalleries,
        ]);
    }
}
