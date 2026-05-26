<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles
        ]);
    }

    public function show(Article $article)
    {
        $relatedArticles = Article::where('id', '!=', $article->id)
            ->where('category', $article->category)
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('Admin/Articles/Show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Articles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'nullable|string|max:255',
            'is_published' => 'required|boolean',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('articles', 'public');
            $validated['thumbnail'] = '/storage/' . ltrim($path, '/');
        }

        if (empty($validated['author'])) {
            $validated['author'] = 'Admin';
        }

        Article::create($validated);

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function edit(Article $article)
    {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'nullable|string|max:255',
            'is_published' => 'required|boolean',
            'thumbnail' => 'nullable', // could be a file or URL string
        ]);

        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail if it exists
            if ($article->thumbnail) {
                $oldPath = ltrim(str_replace('/storage/', '', parse_url($article->thumbnail, PHP_URL_PATH) ?? $article->thumbnail), '/');
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $path = $request->file('thumbnail')->store('articles', 'public');
            $validated['thumbnail'] = '/storage/' . ltrim($path, '/');
        } elseif (is_string($request->input('thumbnail'))) {
            $validated['thumbnail'] = $request->input('thumbnail');
        } else {
            $validated['thumbnail'] = $article->thumbnail;
        }

        if (empty($validated['author'])) {
            $validated['author'] = 'Admin';
        }

        $article->update($validated);

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Article $article)
    {
        if ($article->thumbnail) {
            $path = ltrim(str_replace('/storage/', '', parse_url($article->thumbnail, PHP_URL_PATH) ?? $article->thumbnail), '/');
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Artikel berhasil dihapus.');
    }
}
