<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Client;
use App\Models\PageContent;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Get hero key-value pairs
        $hero = PageContent::where('section', 'hero')
            ->get()
            ->pluck('value', 'key');

        // Featured products (up to 3)
        $featuredProducts = Product::featured()
            ->orderBy('order')
            ->take(3)
            ->get();

        // Latest articles (up to 3, published)
        $latestArticles = Article::published()
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        // Clients ordered by order
        $clients = Client::orderBy('order')->get();

        // Statics
        $stats = [
            'projects' => 120,
            'clients' => 45,
            'years' => 8,
            'team' => 30
        ];

        return Inertia::render('Public/Home', [
            'hero' => $hero,
            'featuredProducts' => $featuredProducts,
            'latestArticles' => $latestArticles,
            'clients' => $clients,
            'stats' => $stats
        ]);
    }
}
