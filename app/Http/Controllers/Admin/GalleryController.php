<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::orderBy('order', 'asc')->get();
        return Inertia::render('Admin/Galleries/Index', [
            'galleries' => $galleries
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Galleries/Create');
    }

    public function show(Gallery $gallery)
    {
        $relatedGalleries = Gallery::where('id', '!=', $gallery->id)
            ->orderBy('order', 'asc')
            ->take(6)
            ->get();

        return Inertia::render('Admin/Galleries/Show', [
            'gallery' => $gallery,
            'relatedGalleries' => $relatedGalleries,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'image' => 'required|image|max:5120', // Up to 5MB
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('galleries', 'public');
            $validated['image_path'] = '/storage/' . ltrim($path, '/');
        }

        $validated['order'] = $request->input('order') ?? 0;

        Gallery::create($validated);

        return redirect()->route('admin.galleries.index')->with('success', 'Foto galeri berhasil diunggah.');
    }

    public function edit(Gallery $gallery)
    {
        return Inertia::render('Admin/Galleries/Edit', [
            'gallery' => $gallery,
        ]);
    }

    public function update(Request $request, Gallery $gallery)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:5120',
            'order' => 'nullable|integer',
        ]);

        if ($request->hasFile('image')) {
            if ($gallery->image_path) {
                $oldPath = ltrim(str_replace('/storage/', '', parse_url($gallery->image_path, PHP_URL_PATH) ?? $gallery->image_path), '/');
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }

            $path = $request->file('image')->store('galleries', 'public');
            $validated['image_path'] = '/storage/' . ltrim($path, '/');
        } else {
            $validated['image_path'] = $gallery->image_path;
        }

        $validated['order'] = $request->input('order') ?? 0;

        $gallery->update($validated);

        return redirect()->route('admin.galleries.index')->with('success', 'Foto galeri berhasil diperbarui.');
    }

    public function destroy(Gallery $gallery)
    {
        if ($gallery->image_path) {
            $path = ltrim(str_replace('/storage/', '', parse_url($gallery->image_path, PHP_URL_PATH) ?? $gallery->image_path), '/');
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $gallery->delete();

        return redirect()->route('admin.galleries.index')->with('success', 'Foto galeri berhasil dihapus.');
    }
}
