<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Contact;
use App\Models\PageContent;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function about()
    {
        $about = PageContent::where('section', 'about')
            ->get()
            ->pluck('value', 'key');

        $visiMisi = PageContent::where('section', 'visi_misi')
            ->get()
            ->pluck('value', 'key');

        return Inertia::render('Public/About', [
            'about' => $about,
            'visiMisi' => $visiMisi,
        ]);
    }

    public function visiMisi()
    {
        $visiMisi = PageContent::where('section', 'visi_misi')
            ->get()
            ->pluck('value', 'key');

        return Inertia::render('Public/VisiMisi', [
            'visiMisi' => $visiMisi
        ]);
    }

    public function produk()
    {
        $products = Product::orderBy('order', 'asc')->get();

        return Inertia::render('Public/Produk', [
            'products' => $products
        ]);
    }

    public function kontak()
    {
        $contact = PageContent::where('section', 'contact')
            ->get()
            ->pluck('value', 'key');

        return Inertia::render('Public/Kontak', [
            'contact' => $contact
        ]);
    }

    public function sendKontak(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        return back()->with('success', 'Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.');
    }

    public function klien()
    {
        $clients = Client::orderBy('order', 'asc')->get();

        return Inertia::render('Public/Klien', [
            'clients' => $clients
        ]);
    }
}
