<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $categories = ['Konsep TI', 'Tips Dev', 'Case Study', 'Industry News'];
        
        $query = Article::published();

        if ($request->filled('category')) {
            $query->where('category', $request->category);
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
        $article = Article::published()->where('slug', $slug)->firstOrFail();

        // Get related articles in the same category, excluding current
        $relatedArticles = Article::published()
            ->where('category', $article->category)
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
