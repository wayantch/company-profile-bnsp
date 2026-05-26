<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Client;
use App\Models\Contact;
use App\Models\Event;
use App\Models\Gallery;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'totalArticles' => Article::count(),
            'totalEvents' => Event::count(),
            'totalGalleries' => Gallery::count(),
            'totalClients' => Client::count(),
            'unreadContacts' => Contact::where('is_read', false)->count(),
        ];

        $recentContacts = Contact::orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentContacts' => $recentContacts,
        ]);
    }
}
