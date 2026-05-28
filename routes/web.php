<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UploadController;
use App\Http\Controllers\Admin\ArticleController as AdminArticleController;
use App\Http\Controllers\Admin\EventController as AdminEventController;
use App\Http\Controllers\Admin\GalleryController as AdminGalleryController;
use App\Http\Controllers\Admin\ClientController as AdminClientController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\PageContentController as AdminPageContentController;
use Illuminate\Support\Facades\Route;

// Public routes (no auth)
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::redirect('/visi-misi', '/about');
Route::get('/produk', [PageController::class, 'produk'])->name('produk');
Route::get('/kontak', [PageController::class, 'kontak'])->name('kontak');
Route::post('/kontak', [PageController::class, 'sendKontak'])->name('kontak.send');
Route::get('/artikel', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/artikel/{slug}', [ArticleController::class, 'show'])->name('articles.show');
Route::get('/event', [EventController::class, 'index'])->name('events.index');
Route::get('/event/{event}', [EventController::class, 'show'])->name('events.show');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery.index');
Route::get('/gallery/{gallery}', [GalleryController::class, 'show'])->name('gallery.show');
Route::get('/klien', [PageController::class, 'klien'])->name('clients.index');

// Redirect from old '/dashboard' to '/admin'
Route::redirect('/dashboard', '/admin');

// Admin routes (prefix: /admin, middleware: auth)
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('articles', AdminArticleController::class);
    Route::resource('events', AdminEventController::class);
    Route::resource('galleries', AdminGalleryController::class);
    Route::resource('clients', AdminClientController::class);
    Route::resource('products', AdminProductController::class);
    Route::resource('contacts', AdminContactController::class);
    Route::resource('page-contents', AdminPageContentController::class);
    Route::post('upload', [UploadController::class, 'store'])->name('upload');
});

// Alias named route 'dashboard' for Breeze default compatibility redirect
Route::get('/admin', [DashboardController::class, 'index'])->middleware('auth')->name('dashboard');

// Profile routes (Breeze default)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
