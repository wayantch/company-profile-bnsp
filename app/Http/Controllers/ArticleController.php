<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::orderBy('order', 'asc')->get();

        $query = Article::published()->with('category');

        if ($request->filled('category')) {
            $query->whereHas('category', function ($categoryQuery) use ($request) {
                $categoryQuery->where('slug', $request->category);
            });
        }

        $articles = $query->orderBy('created_at', 'desc')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Public/Artikel/Index', [
            'articles' => $articles,
            'categories' => $categories,
            'currentCategory' => $request->category,
        ]);
    }

    public function show($slug)
    {
        $article = Article::published()->with('category')->where('slug', $slug)->firstOrFail();

        // Get related articles in the same category, excluding current
        $relatedArticles = Article::published()->with('category')
            ->where('category_id', $article->category_id)
            ->where('id', '!=', $article->id)
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();

        return Inertia::render('Public/Artikel/Show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }
}
